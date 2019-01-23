import { Injectable } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Injectable()
export class SeoService {

    constructor(
        private title: Title,
        private meta: Meta
    ) { }

    setMeta(description: string, keywords: string) {
        const attributeSelectorDescription = 'name="description"';
        const attributeSelectorKeywords = 'name="keywords"';
        this.meta.removeTag(attributeSelectorDescription);
        this.meta.removeTag(attributeSelectorKeywords);
        this.meta.addTags([
            { name: 'description', content: description },
            { name: 'keywords', content: keywords }
        ]);
    }

    setNoKeywordsMeta(description: string) {
        const attributeSelectorDescription = 'name="description"';
        this.meta.removeTag(attributeSelectorDescription);
        this.meta.addTags([
            { name: 'description', content: description }
        ]);
    }

    addTitle (title: string) {
        this.title.setTitle(title);
    }

}
