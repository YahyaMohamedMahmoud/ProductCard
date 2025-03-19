export function textSlice (text:string, limit:number = 60) {
    if (text.length > limit) {
        return text.slice(0 , limit) + "...";
    }
    return text
}