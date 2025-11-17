class MobileDetect {
    constructor(funcDesktop, funcMobile, minWidth, maxWidth) {
        this.minWidth = minWidth;
        this.maxWidth = maxWidth;
        this.funcDesktop = funcDesktop;
        this.funcMobile = funcMobile;

        let isMobile = null;

        if(!this.minWidth && !this.maxWidth)
            isMobile = window.matchMedia("(max-width: 992px)");
        else {
            isMobile = window.matchMedia("(min-width: " + this.minWidth + "px) and (max-width: " + this.maxWidth + "px)");
        }

        if (isMobile.matches) {
            this.funcDesktop();
        } else {
            this.funcMobile();
        }

        $(window).on('resize', () => {

            if (isMobile.matches) {
                this.funcDesktop();
            } else {
                this.funcMobile();
            }
        });
    }
}