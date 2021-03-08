const initializeDisqus = (url: string, identifier: string) => {
    globalThis.disqus_config = function () {
        this.page.url = url;
        this.page.identifier = identifier;
    };
  
    const s = document.createElement('script');
    s.src = 'https://auroratide.disqus.com/embed.js';
    s.setAttribute('data-timestamp', `${+new Date()}`);
    (document.head || document.body).appendChild(s);
};
  
  const resetDisqus = (url: string, identifier: string) => {
    globalThis.DISQUS.reset({
        reload: true,
        config () {  
            this.page.url = url;
            this.page.identifier = identifier;  
        }
    });
};

export type Options = {
    url: string,
    id: string,
}

export function disqus(node: HTMLElement, options: Options) {
    node.id = "disqus_thread"

    if (!globalThis.DISQUS) {
        initializeDisqus(options.url, options.id)
    } else {
        resetDisqus(options.url, options.id)
    }

    return {
        update(options: Options) {
            if (globalThis.DISQUS)
                resetDisqus(options.url, options.id)
        },

        destroy() { },
    }
}
