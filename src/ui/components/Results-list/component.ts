import Component, {tracked} from '@glimmer/component';


export default class ResultsList extends Component {
    message = 'Most recent books';
    terms = '';
    @tracked loading = false;
    @tracked hasSearched = false;
    @tracked results = [];
    @tracked itunes = [];

    constructor(options) {
        super(options);
    }

    addterms(event){
            this.terms = event.target.value;
    }

    searchEnter(event){
        event.preventDefault();
        this.loadMusic();
    }

    search(){
        this.loadMusic();
    }

    async loadMusic()
    {
        if (!this.loading && this.terms !== '')
        {
            this.loading = true;
            this.hasSearched = true;
            let response = await fetch('https://itunes.apple.com/search?term='+this.terms+'&limit=15');

            let json = await response.json();
            this.loading = false;
            this.itunes = json.results;
        }
    }

}
