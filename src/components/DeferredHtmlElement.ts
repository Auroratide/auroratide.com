/**
 * Svelte renders the page in phases. The web component will be "mounted"
 * even if its children are not yet there. Any component that relies on
 * the existence of its children or other elements on the page, therefore,
 * must wait until Svelte decides to render those things.
 * 
 * This element attempts to make all of this simpler by waiting until
 * the desired state is achieved.
 */
export abstract class DeferredHtmlElement extends HTMLElement {
    constructor() {
        super()

        const waitUntilFullyReady = () => {
            if (this.deferUntil()) {
                this.onFullyReady()
            } else {
                setTimeout(waitUntilFullyReady, 2)
            }
        }

        waitUntilFullyReady()
    }

    abstract deferUntil(): boolean
    abstract onFullyReady(): void
}
