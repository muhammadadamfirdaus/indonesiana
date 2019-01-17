function getCurrentScroll(){return window.pageYOffset||document.documentElement.scrollTop}let accordion=$(".accordion"),accordionButton=accordion.find(".toggle");accordionButton.on("click",function(e){e.preventDefault(),e.stopImmediatePropagation(),console.log("closing accordion"),"clicked"==$(this).data("status")?$(this).data("status","not_clicked").closest(accordion).removeClass("accordion-closed"):$(this).data("status","clicked").closest(accordion).addClass("accordion-closed")});var listActionButton=$(".dashboard ul li");listActionButton.on("mouseenter",function(){var e=$(this);listActionButton.not(e).removeClass("active"),e.addClass("active")}).on("mouseleave",function(){listActionButton.removeClass("active ")});var closestParent=function(e,t){for(Element.prototype.matches||(Element.prototype.matches=Element.prototype.matchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector||Element.prototype.webkitMatchesSelector||function(e){for(var t=(this.document||this.ownerDocument).querySelectorAll(e),a=t.length;--a>=0&&t.item(a)!==this;);return a>-1});e&&e!==document;e=e.parentNode)if(e.matches(t))return e;return null};const createPost=document.querySelector(".create-post"),mediaGallery=document.querySelector(".gallery");if(mediaGallery){modal(buttonUpload=".upload",modalUpload=".upload");var listThumbnail=".thumbnail",modalGallery=".gallery";modal(listThumbnail,modalGallery)}else if(createPost){var buttonUpload,modalUpload;modal(buttonUpload=".upload",modalUpload=".create-post")}const thumbnail=document.querySelectorAll(".list li");for(let e=0;e<thumbnail.length;e++)thumbnail[e].addEventListener("click",function(t){t.preventDefault(),console.log("selected");const a=document.querySelector(".preview img"),o=document.querySelector(".meta-url");a&&(a.src=thumbnail[e].getElementsByTagName("img")[0].src,o.value=thumbnail[e].getElementsByTagName("img")[0].src);for(let e=0;e<thumbnail.length;e++)thumbnail[e].classList.remove("selected"),this.classList.add("selected")});function modal(e,t){const a=document.querySelector(".modal"+t);a&&window.addEventListener("click",function(t){if(t.target.closest(".button-modal"+e))a.classList.contains("active")?a.classList.remove("active"):a.classList.add("active");else if(t.target.closest(".modal")){if(!t.target.closest(".button.close"))return;a.classList.remove("active")}else a.classList.remove("active")})}const buttonNavigation=document.querySelectorAll("nav li a.button"),buttonNavigationActive=document.querySelectorAll("nav li a.button.active");for(let e=0;e<buttonNavigation.length;e++)buttonNavigation[e].addEventListener("click",function(e){e.preventDefault();for(let e=0;e<buttonNavigationActive.length;e++)buttonNavigation[e].classList.remove("active"),this.classList.add("active");view()});function published(e,t){var a=$(e).attr("data-status")<$(t).attr("data-status");if(0!==a)return a;newest()}function draft(e,t){return $(e).attr("data-status")>$(t).attr("data-status")}function asc_sort(e,t){return $(e).attr("data-title")>$(t).attr("data-title")}function des_sort(e,t){return $(e).attr("data-title")<$(t).attr("data-title")}function newest(e,t){return new Date($(e).attr("data-time"))<new Date($(t).attr("data-time"))}function oldest(e,t){return new Date($(e).attr("data-time"))>new Date($(t).attr("data-time"))}function filterListArticle(e,t){jQuery.expr[":"].Contains=function(e,t,a){return jQuery(e).text().toUpperCase().indexOf(a[3].toUpperCase())>=0};var a=$("form#filter-article"),o=$("form#filter-article input.filter");a.append(o).appendTo(e);o.val("Cari berdasarkan judul"),o.on("change",function(){var e=$(this).val();e?($(t).find("li a:not(:Contains("+e+"))").closest("li").hide(),$(t).find("li a:Contains("+e+")").closest("li").show()):$(t).find("li").show()}).on("keyup",function(e){e.stopPropagation(),$(this).change()}).on("focus",function(){console.log("focus"),$(this).val()&&o.val("")}).on("blur",function(){console.log("blur"),$(t).find("li").show(),""==$(this).val()?o.val("Cari berdasarkan judul"):$(this).val()&&o.val("Cari berdasarkan judul")})}function view(){const e=document.querySelector(".icon.view-grid"),t=document.querySelector(".icon.view-list"),a=closestParent(e,".dashboard");e&&(t.classList.contains("active")?(a.classList.remove("view-grid"),a.classList.add("view-list")):(a.classList.remove("view-list"),a.classList.add("view-grid")))}function changePlaceholder(e,t){$(e).on("focus",function(){$(this).val(t)&&(e.val(""),console.log("focus"))}).on("blur",function(){console.log("blur"),""==$(this).val()&&e.val(t)})}if($("a.published").on("click",function(){$("ul.list li").sort(published).appendTo(".list"),console.log("artikel tayang")}),$("a.draft").on("click",function(){$("ul.list li").sort(draft).appendTo(".list"),console.log("draft")}),$("a.ascending").on("click",function(){$("ul.list li").sort(asc_sort).appendTo(".list"),console.log("a ke z")}),$("a.descending").on("click",function(){$("ul.list li").sort(des_sort).appendTo(".list"),console.log("z ke a")}),$("a.newest").on("click",function(){$("ul.list li").sort(newest).appendTo(".list"),console.log("terbaru")}),$("a.oldest").on("click",function(){$("ul.list li").sort(oldest).appendTo(".list"),console.log("terlama")}),$(window).on("load",function(){filterListArticle($("#filter-article"),$("#list"))}),$(".settings").length){if($(".settings .profile").length){var profileSettingsUsername=$(".settings main .profile input#username"),placeholderUsername=profileSettingsUsername.data("username");changePlaceholder(profileSettingsUsername,placeholderUsername),profileSettingsUsername.val(placeholderUsername);var profileSettingsNickname=$(".settings main .profile input#nickname"),placeholderNickname=profileSettingsNickname.data("nickname");changePlaceholder(profileSettingsNickname,placeholderNickname),profileSettingsNickname.val(placeholderNickname);var profileSettingsFullname=$(".settings main .profile input#full-name"),placeholderFullname=profileSettingsFullname.data("fullname");changePlaceholder(profileSettingsFullname,placeholderFullname),profileSettingsFullname.val(placeholderFullname);var profileSettingsEmail=$(".settings main .profile input#email"),placeholderEmail=profileSettingsEmail.data("email");changePlaceholder(profileSettingsEmail,placeholderEmail),profileSettingsEmail.val(placeholderEmail);var profileSettingsPassword=$(".settings main .profile input#password"),placeholderPassword=profileSettingsPassword.data("password");changePlaceholder(profileSettingsPassword,placeholderPassword),profileSettingsPassword.val(placeholderPassword);var profileSettingsBio=$(".settings main .profile input#bio"),placeholderBio="Ceritakan tentang Anda";changePlaceholder(profileSettingsBio,placeholderBio),profileSettingsBio.val(placeholderBio);var profileSettingsLocation=$(".settings main .profile input#location"),placeholderLocation="Masukkan lokasi Anda";changePlaceholder(profileSettingsLocation,placeholderLocation),profileSettingsLocation.val(placeholderLocation);var profileSettingsWeb=$(".settings main .profile input#web"),placeholderWeb="Situs Anda";function unsaved(){$("nav.tabs li").removeClass("current"),$(".tab-content").removeClass("current"),$(".settings .tabs li:nth-child(1)").addClass("current"),$(".tab-content.profile").addClass("current");var e=popup.closest(container).addClass("switch-tab active");popup.html("Perubahan Anda belum disimpan, simpan terlebih dahulu"),$(document).on("click",function(t){$(t.target).closest(e).length&&(console.log("di dalam"),e.closest(container).removeClass("switch-tab active")),t.stopPropagation(),popup.removeClass("active")})}changePlaceholder(profileSettingsWeb,placeholderWeb),profileSettingsWeb.val(placeholderWeb);var isKeypress=!1;$("input.profile").on("change keyup keydown",function(e){container.addClass("unsaved")}),$("nav li, nav a").on("click",function(){$(".unsaved").length?(console.log("belum disave"),unsaved()):console.log("udah disave")}),$(".saved").length&&(container.removeClass("saved"),$("nav li, nav a").on("click",function(){console.log("ada"),$(".saved").length})),$(".settings a.save").on("click",function(e){e.stopImmediatePropagation(),$("#profile").submit(),container.addClass("saved").removeClass("unsaved"),popup.html("Saved!"),setTimeout(function(){container.removeClass("saved")},1e3)})}if($(".settings .notification").length){var indicatorButton=$(".indicator");indicatorButton.on("click",function(e){e.preventDefault();var t=$(this);"non-active"==t.attr("data-indicator")?(console.log("active"),t.attr("data-indicator","active").addClass("active").html("<span>On</span>")):t.attr("data-indicator","non-active").removeClass("active").html("<span>Off</span>")})}}let sidebarExpander=$(".sidebar").find(".switch");sidebarExpander.off("click").on("click",function(e){e.stopPropagation();$("nav.sidebar");"clicked"==$(this).data("status")?$(this).data("status","not_clicked").closest(".dashboard").removeClass("sidebar-hide"):$(this).data("status","clicked").closest(".dashboard").addClass("sidebar-hide")});let sidebarMenuList=$(".sidebar .wrapper > li"),subMenu=$(".sub ul");sidebarMenuList.on("mouseenter",function(e){e.preventDefault(),e.stopImmediatePropagation(),sidebarMenuList.removeClass("active"),$(this).addClass("active"),sidebarMenuList.on("mouseleave",function(e){$(e.target).closest(subMenu).length&&sidebarMenuList.removeClass("active")})}),$(window).on("click",function(e){e.stopImmediatePropagation(),$(e.target).closest(subMenu)&&sidebarMenuList.removeClass("active")});var mediaSlideShow=new Swiper(".modal.media.swiper-container",{preventClicks:!1,paginationClickable:!0,spaceBetween:40,navigation:{nextEl:".modal.media.swiper-container .swiper-button-next",prevEl:".modal.media.swiper-container .swiper-button-prev"}});$(".tabs li").on("click",function(e){e.preventDefault(),e.stopPropagation();var t=$(this).attr("data-tab");$(".tabs li").removeClass("current"),$(".tab-content").removeClass("current"),$(this).addClass("current"),$("#"+t).addClass("current"),history.pushState(null,null,"#"+t)});const toolbarProfileExpand=document.querySelector(".profile-expand"),toolbarProfile=document.querySelector(".toolbar .profile");toolbarProfile.addEventListener("mouseenter",function(e){e.stopImmediatePropagation(),toolbarProfileExpand.classList.add("active")}),toolbarProfileExpand.addEventListener("mouseleave",function(e){e.stopImmediatePropagation(),toolbarProfileExpand.classList.remove("active"),console.log("profile expand outside area")}),window.addEventListener("click",function(e){e.stopImmediatePropagation(),e.target.closest(".profile-expand")||toolbarProfileExpand.classList.remove("active")});let container=$(".container"),popup=$(".popup");var tooltip=$(".tooltip");tooltip.each(function(){$(this).data("title",$(this).attr("title")),$(this).removeAttr("title")}),tooltip.on("mouseenter",function(e){e.stopImmediatePropagation(),$(this).after('<div class="tooltip-content">'+$(this).data("title")+"</div>");var t=tooltip.find(".tooltip-content"),a=$(this).find(t);t.not(a).remove()}),tooltip.on("mouseleave",function(){$(".tooltip-content").remove()});