export default function textLimit([text]) {
    if (text !== undefined && text.length > 30)
    {
        return text.substring(0,30) + '...';
    }

    return text;
}
