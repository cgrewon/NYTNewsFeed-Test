export type Article = {
    title: string;
    abstract: string;
    url: string;
    byline: string;
    item_type: string;
    updated_date: string;
    created_date: string;
    published_date: string;
    multimedia: Multimedia[];
    short_url: string;
}

export type Multimedia = {
    url: string;
    format: string;
    height: number;
    width: number;
    type: string;
    subtype: string;
    caption: string;
    copyright: string;

}