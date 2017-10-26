/**
 *
 * @authors Lincoln (875482941@qq.com)
 * @date    2017-09-07 19:53:18
 */

'use strict'

import * as common from "common";

var pageNums = 0

class scroll{

    constructor(){
        this.curPage = 0

        this.init = (parendId, childId, time) => {
            pageNums++
            this.el = this.$el(parendId, childId, time)
            var container = document.querySelector('.' + childId).parentNode,
            childDom = container.childNodes

            this.curHeight = (window.getComputedStyle ? (window.getComputedStyle(this.el).height).replace('px', '') : this.el.offsetHeight) >> 0

            var mouseWheelEv = /Firefox/i.test(navigator.userAgent) ? "DOMMouseScroll": "mousewheel",
            direction = /Firefox/i.test(navigator.userAgent) ? "detail": "deltaY",
            now = Date.now()
            var _this = this
            common.listenEvent(this.el, mouseWheelEv, function(ev){
                if(Date.now() - now > 1000){
                    if(ev[direction] > 0){
                        if(_this.curPage + 1 < childDom.length){
                            _this.curPage++
                        }else{
                            _this.curPage = 0
                        }
                    }else{
                        if(_this.curPage - 1 >= 0){
                            _this.curPage--
                        }else{
                            _this.curPage = childDom.length - 1
                        }

                    }
                    container.style.transform = 'translate(0px, ' + -_this.curHeight * _this.curPage + 'px)'
                    now = Date.now()
                }
            })

            common.listenEvent(window, 'resize', function(){

                _this.curHeight = (window.getComputedStyle ? (window.getComputedStyle(_this.el).height).replace('px', '') : _this.el.offsetHeight) >> 0
                container.style.transition = '0s'
                container.style.transform = 'translate(0px, ' + -_this.curHeight * _this.curPage + 'px)'
                setTimeout(function(){
                    container.style.transition = time.indexOf('s') < 0 ? time + 's' : time
                }, 0)
            })
        }
    }

    $el(parendId, childId, time){
        var parentDom = document.getElementById(parendId)
        parentDom.style.overflow = 'hidden'

        var childDom = parentDom.querySelectorAll('.' + childId)
        var container = document.createElement('section')
        var btnGroup = document.createElement('section')

        var span = document.createElement('span')
        var frag = document.createDocumentFragment()
        var transition = time.indexOf('s') < 0 ? time + 's' : time
        var _this = this
        for(var i = 0;i < childDom.length;i++){
            container.appendChild(childDom[i])
            var btn = span.cloneNode(false)
            btn.setAttribute('style', 'display: inline-block;width: 10px;height: 10px;border-radius: 100%;background: rgba(255,255,255,.6);transition: .4s;')
            if(i == 0){
                btn.style.background = '#f30'
                btn.style.transform = 'scale(1.5)'
            }
            ;(function(i){
                common.listenEvent(btn, 'click', function(){
                    _this.curPage = i
                    container.style.transform = 'translate(0px, ' + -_this.curHeight * _this.curPage + 'px)'
                })
            })(i);
            frag.appendChild(btn)
        }
        btnGroup.appendChild(frag)
        btnGroup.setAttribute('style', 'position: absolute;right: 10px;top: 50%;width: 10px;text-align: center;transform: translate(0, -50%);transition: '+ transition +' ')
        btnGroup.id = 'ui-fullpage-btn-' + pageNums

        container.style.width = '100%'
        container.style.height = '100%'
        container.style.transition = time.indexOf('s') < 0 ? time + 's' : time
        container.id = 'pageName-' + pageNums


        parentDom.style.position = 'relative'
        parentDom.appendChild(container)
        parentDom.appendChild(btnGroup)
        return parentDom
    }

}


var fullpage = new scroll()

common.observable(fullpage, 'curPage', function(index){
    var btnGroup = document.getElementById('ui-fullpage-btn-' + pageNums),
        span = btnGroup.childNodes

    for(var i = 0;i < span.length;i++){
        if(i == index){
            span[index].style.background = '#f30'
            span[index].style.transform = 'scale(1.5)'
        }else{
            span[i].style.background = 'rgba(255,255,255,.6)'
            span[i].style.transform = ''
        }
    }

})

export {fullpage}
