$(document).ready(function() {


    $('#video-background').prop('volume', 0)
    let isPlaying = false
    let navFixed = false
    let list = $('#nav li').map(function() {
        return $.trim($(this).text())
    }).get()


    // console.log(list)

    // $('#video').click(function() {
    //     if (isPlaying) {
    //         $('#video-background').animate({volume: 0})
    //         $('.hide').fadeIn('slow')
    //         isPlaying = false
    //     } else {
    //         $('#video-background').animate({volume: 1})
    //         $('.hide').fadeOut('slow')
    //         isPlaying = true
    //     }
    // })

    $(document).scroll(function () {
        let nav = $('#nav-container')
        if ($(document).scrollTop() >= $('#video').height()) {
            console.log("passed nav")
            $('.content-section').css('padding-top', '70px')
            nav.css('position', 'fixed')
            $('#top').slideDown('slow')
            navFixed = true

        } else {
            let currentList = $('#nav li').map(function () {
                return $.trim($(this).text())
            }).get()
            $('.content-section').css('padding-top', '20px')
            nav.css('position', 'relative')
            $('#top').slideUp('slow')

            

            navFixed = false
        }

        if ($(document).scrollTop() >= $('.content-section#support').position().top - 100) {
            $('#footer').slideDown()
        } else {
            $('#footer').slideUp()
            
        }
    })

    $('#nav li').click(function () {
        if (this.id !== 'zario') {
            let element = $('.content-section#' + this.id)
            let heightToScroll = $(element).offset().top

            let currentList = $('#nav li').map(function () {
                return $.trim($(this).text())
            }).get()

            let navItem = this

            if (navFixed) {
                $("html body").animate({ scrollTop: heightToScroll - 30 }, "slow", 'swing')
            } else {
                $("html body").animate({ scrollTop: heightToScroll - 80 }, "slow", 'swing')
            }
            $("#nav li:contains('Top')").html('<h3>' + list[currentList.indexOf('Top')] + '</h3>')
        }
    })

    $('#top').click(function () {
        $("html body").animate({ scrollTop: 0 }, "slow")
    })
})