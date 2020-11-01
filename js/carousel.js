class Carousel {
    /**
     * 
     * @param {HTML element} element 
     * @param {Object} options 
     * @param {Onject} options.slidesToScroll Nombre d'éléments å faire défiler
     * @param {Onject} options.slideVisible Nombre d'éléments visible dans un slide
     * @param {Onject} options.infinite = false boolean permettant de faire ou non un defilement infinit
     */
    constructor(element, options = {}){
        this.element = element
        this.options = options
        this.isMiddle = false
        this.isMobile = false /* variable pour déterminer si on est sur mobile et adapter la taille des cards*/
        let children = [].slice.call(element.children)
        this.currentItem = 0
        this.root = this.createDivWithClass('carousel')
        this.container = this.createDivWithClass('carousel_container')
        this.root.appendChild(this.container)
        this.element.appendChild(this.root)
        this.items = children.map((child) => {
            let item = this.createDivWithClass('carousel_item')
            item.appendChild(child)
            return item
        });
        if (this.options.infinite) {
            this.offset = this.options.slideVisible*2 - 1
            this.items = [
                ...this.items.slice(this.items.length - this.offset).map(item => item.cloneNode(true)),
                ...this.items,
                ...this.items.slice(0, this.offset).map(item => item.cloneNode(true)),
            ]     
            this.goToItem(this.offset)
        }
        this.items.forEach(item => this.container.appendChild(item));
        this.setStyle()
        this.createNavigation()
        this.omWindowResize()
        window.addEventListener('resize', this.omWindowResize.bind(this))
        if (this.options.infinite) {
            this.container.addEventListener('transitionend', this.resetAnim.bind(this))
        }   
    }

    /**
     * Cette méthode permet d'appliquer les bonnes dimmensions aux éléments du carousel
     */
    setStyle (){
        let ratio = this.items.length / this.slideVisible
        this.container.style.width = (ratio*100) + "%"
        this.items.forEach(item => item.style.width = ((100/this.slideVisible)/ratio) + '%');
    }

    /**
     * Fonction permettant de créer les boutons de navigation du carousel
     */
    createNavigation (){
        let divButton = this.createDivWithClass('control_Carousel')
        let nextButton = this.createDivWithClass('carousel_Next')
        let prevButton = this.createDivWithClass('carousel_Prev')
        this.root.appendChild(divButton)
        divButton.appendChild(nextButton)
        divButton.appendChild(prevButton)
        nextButton.addEventListener('click', this.next.bind(this))
        prevButton.addEventListener('click', this.prev.bind(this))
    }

    next(){
        this.goToItem(this.currentItem + this.slidesToScroll)
    }

    prev() {
        this.goToItem(this.currentItem - this.slidesToScroll)
    }

    /**
     * Fonction permettant de slider vers la slide suivante ou précédante
     * @param {number} index num 
     */
    goToItem(index, anim=true){
        if (index < 0) {
            index = this.items.length - this.slideVisible
        }else if (index > this.items.length - this.slideVisible) {
            index = 0
        }
        let translateX = index * -100/this.items.length
        if(anim === false){
            this.container.style.transition = 'none'
        }
        this.container.style.transform = 'translate3D(' + translateX + '%, 0, 0)'
        this.container.offsetHeight // force repaint
        if(anim === false){
            this.container.style.transition = ''
        }
        this.currentItem = index
    }

    /**
     * Déplacer la position de carousel afin de créer un effet infini
     */
    resetAnim(){
        if(this.currentItem <= this.options.slidesToScroll){
            this.goToItem(this.currentItem + (this.items.length - 2*this.offset), false)
        } else if(this,this.currentItem >= this.items.length - this.offset){
            this.goToItem(this.currentItem - (this.items.length - 2*this.offset), false)
        }
    }

    /**
     * 
     * @param {String} className 
     * @returns {HTMLElement}
     */
    createDivWithClass (className){
        let div = document.createElement('div')
        div.setAttribute('class', className)
        return div
    }

    /**
     * 
     */
    omWindowResize(){
        let middle = window.innerWidth < 1130
        let mobile = window.innerWidth < 850
        if (mobile !== this.isMobile){
            this.isMobile = mobile
            this.setStyle()
            middle = false
        }else if (middle !== this.isMiddle){
            this.isMiddle = middle
            this.setStyle()
        }
    }

    /**
     * @returns {number} nomde de slide a scroll par appuis de bouton
     */
    get slidesToScroll(){
        return this.isMobile ? 1 : this.options.slidesToScroll
    }

    /**
     * @returns {number} nomde de slide a afficher par frame
     */
    get slideVisible(){
        if (this.isMobile){
            return 2
        }else if (this.isMiddle){
            return 3
        }else{
            return this.options.slideVisible
        }
    }
}

document.addEventListener("DOMContentLoaded", function() {
    new Carousel(document.querySelector("#carousel_Cards"), {
        slidesToScroll:1, 
        slideVisible:4, 
        infinite: true
    })
})


