(window.webpackJsonp=window.webpackJsonp||[]).push([["metric"],{IDlv:function(e,n,t){"use strict";t.r(n);var o=t("EVdn"),c=t.n(o),i=null;c()(document).ready((function(){pageId&&c.a.get({url:"/cms_bundle/ajax/get_metric_data/"+pageId,success:function(e){e.number&&(i=e.number,function(e){e.forEach((function(n){if("click"===n.eventType)c()(document).find("a[href*='"+n.link+"']").one("click",(function(){ym(i,n.typeGoal,n.title,{URL:document.location.href})}));else if("mouseover"===n.eventType)c()(document).find("a[href*='"+n.link+"']").one("mouseover",(function(){ym(i,n.typeGoal,n.title,{URL:document.location.href})}));else if("scroll"===n.eventType){var t={root:document.querySelector("main"),threshold:.5},o=new IntersectionObserver((function(n,t){n.forEach((n=>{e.forEach((function(e){e.link===n.target.getAttribute("data-metricname")&&(void 0===e.showCount?e.showCount=0:e.showCount++,1===e.showCount&&ym(i,e.typeGoal,e.title,{URL:document.location.href}))}))}))}),t);c()(document).find("[data-metricname='"+n.link+"']").each((function(){o.observe(c()(this)[0])}))}}))}(e.data))}})}))}},[["IDlv","runtime",0]]]);