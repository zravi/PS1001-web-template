

/* PRACTICALSERIES (c) 2017

*******************************************************************************
Title :          LOCAL SCROLL - JQUERY                          22-03-SCROLL.JS
*******************************************************************************

PRACTICALSERIES: Practical Series of Publications by Michael Gledhill
                 Published in the United Kingdom

                 Email: mg@practicalseries.com
                 Web:   https://practicalseries.com

-------------------------------------------------------------------------------
DETAILS         LOCAL SCROLL FUNCTIONS

jQuery is using the latest version from the GoogleAPIs library.

This script applies the scroll to a point within the page (scrollTop)
functionality for the current page.

-------------------------------------------------------------------------------
NAMING CONVENTIONS

Each <section> of the site has a waypoint (WP) reference number that identifies
the start of each section. These are id attributes and have the format:

        #js--ccssii

    where:  cc - chapter number
            ss - subsection number
            ii - inline section number

The six digit number is unique to each section, i.e. section 2.1.3
would have waypoint reference js--020103

The trigger class used in the <a> element to trigger the scroll to the waypoint
has the name .js-sc-000000 where the six digit number matches the waypoint
number of the section that is to be scrolled to.

The scrollTop function has an offset of -60px to ensure the title is visible
below the fixed navigation bar.

-------------------------------------------------------------------------------
MODIFICATION HISTORY:

This is a complete summary of all software modifications.

Date          Issue        Author         Reason for Modification
-------------------------------------------------------------------------------
09 May 2019   R01          M. Gledhill    First formal release

06 May 2019   P27          M. Gledhill    Published
---------------------------------------------------------------------------- */


/* ****************************************************************************
   WAIT FOR PAGE TO LOAD
   ****************************************************************************
   No jQuery actions take place until the webpage has loaded, all JQuery code
   is contained within the .ready(function()).
   ************************************************************************* */


$(document).ready(function() {                  /* START OF PAGE READY FUNCTION */

/* ****************************************************************************
   REVISION
   **************************************************************************** */

    $('.aside-right-rev').append (
        "<p>scroll.js&nbsp;&mdash;&nbsp;R01</p>" /* LOCAL JS REVISION NUMBER */
    );



/* ****************************************************************************
   SCROLL TO SECTION
   ****************************************************************************
   This holds several scrollTop functions that scroll from the TOC to the
   specified section. There is one click function per <a> within the TOC.
   ************************************************************************* */


/* ---------------------------------------------------------------------------
   SCROLL TO TOP
   The offset is set to .to -80 - e.g.

    $('.js--sc-000000').click(function () {
       $('html, body').animate({scrollTop: $('#js--000000').offset().top -80}, 1000);
    });
   ------------------------------------------------------------------------- */
   $('.js--sc-000000').click(function () {     /* START of scroll function */
       $('html, body').animate({scrollTop: $('#js--000000').offset().top -80}, 1000);
    });                                         /* END of scroll function */


/* ---------------------------------------------------------------------------
   SCROLL TO CHAPTER (Non heading level after TOC)
   The offset is set to .to -10 - e.g.

    $('.js--sc-NN0000').click(function () {
       $('html, body').animate({scrollTop: $('#js--NN0000').offset().top -10}, 1000);
    });
   ------------------------------------------------------------------------- */


/* ---------------------------------------------------------------------------
   SCROLL TO -  SECTIONS & SUBSECTIONS
   The offset is set to .to -20 - e.g.

    $('.js--sc-NN0100').click(function () {
       $('html, body').animate({scrollTop: $('#js--NN0100').offset().top -20}, 1000);
    });
   ------------------------------------------------------------------------- */
    $('.js--sc-220300').click(function () {     /* START of scroll function */
       $('html, body').animate({scrollTop: $('#js--220300').offset().top -20}, 250);
    });                                         /* END of scroll function */

    $('.js--sc-220301').click(function () {     /* START of scroll function */
       $('html, body').animate({scrollTop: $('#js--220301').offset().top -20}, 1000);
    });                                         /* END of scroll function */

    $('.js--sc-220301').click(function () {     /* START of scroll function */
       $('html, body').animate({scrollTop: $('#js--220301').offset().top -20}, 1000);
    });                                         /* END of scroll function */

    $('.js--sc-220302').click(function () {     /* START of scroll function */
       $('html, body').animate({scrollTop: $('#js--220302').offset().top -20}, 1000);
    });                                         /* END of scroll function */

    $('.js--sc-220303').click(function () {     /* START of scroll function */
       $('html, body').animate({scrollTop: $('#js--220303').offset().top -20}, 1000);
    });                                         /* END of scroll function */

    $('.js--sc-220304').click(function () {     /* START of scroll function */
       $('html, body').animate({scrollTop: $('#js--220304').offset().top -20}, 1000);
    });                                         /* END of scroll function */

    $('.js--sc-220305').click(function () {     /* START of scroll function */
       $('html, body').animate({scrollTop: $('#js--220305').offset().top -20}, 1000);
    });                                         /* END of scroll function */

    $('.js--sc-220306').click(function () {     /* START of scroll function */
       $('html, body').animate({scrollTop: $('#js--220306').offset().top -20}, 1000);
    });                                         /* END of scroll function */

    $('.js--sc-220307').click(function () {     /* START of scroll function */
       $('html, body').animate({scrollTop: $('#js--220307').offset().top -20}, 1000);
    });                                         /* END of scroll function */

    $('.js--sc-220308').click(function () {     /* START of scroll function */
       $('html, body').animate({scrollTop: $('#js--220308').offset().top -20}, 1000);
    });                                         /* END of scroll function */

    $('.js--sc-220309').click(function () {     /* START of scroll function */
       $('html, body').animate({scrollTop: $('#js--220309').offset().top -20}, 1000);
    });                                         /* END of scroll function */

    $('.js--sc-220310').click(function () {     /* START of scroll function */
       $('html, body').animate({scrollTop: $('#js--220310').offset().top -20}, 1000);
    });                                         /* END of scroll function */

    $('.js--sc-220311').click(function () {     /* START of scroll function */
       $('html, body').animate({scrollTop: $('#js--220311').offset().top -20}, 1000);
    });                                         /* END of scroll function */

    $('.js--sc-220312').click(function () {     /* START of scroll function */
       $('html, body').animate({scrollTop: $('#js--220312').offset().top -20}, 1000);
    });                                         /* END of scroll function */

    $('.js--sc-220313').click(function () {     /* START of scroll function */
       $('html, body').animate({scrollTop: $('#js--220313').offset().top -20}, 1000);
    });                                         /* END of scroll function */

    $('.js--sc-220314').click(function () {     /* START of scroll function */
       $('html, body').animate({scrollTop: $('#js--220314').offset().top -20}, 1000);
    });                                         /* END of scroll function */

    $('.js--sc-220315').click(function () {     /* START of scroll function */
       $('html, body').animate({scrollTop: $('#js--220315').offset().top -20}, 1000);
    });                                         /* END of scroll function */

/* ---------------------------------------------------------------------------
   SCROLL TO -  NON-STANDARD (INLINE) SECTIONS
   The offset is set to .to -120 - e.g.

    $('.js--sc-nn0101a').click(function () {
        $('html, body').animate({scrollTop: $('#js--nn0101a').offset().top -120}, 1000);
    });
   ------------------------------------------------------------------------- */


/* ---------------------------------------------------------------------------
   SCROLL TO -  CROSS REFERENCES
   For figures, the offset is set to .to -80 - e.g.

    $('.js--sc-fNN-01').click(function () {
       $('html, body').animate({scrollTop: $('#js--fNN-01').offset().top -80}, 1000);
    });

   For tables, the offset is set to .to -60 - e.g.

    $('.js--sc-tNN-01').click(function () {
       $('html, body').animate({scrollTop: $('#js--tNN-01').offset().top -60}, 1000);
    });

   For codefragments, the offset is set to .to -120 - e.g.

    $('.js--sc-cNN-01').click(function () {
       $('html, body').animate({scrollTop: $('#js--cNN-01').offset().top -120}, 1000);
    });

   For equations, the offset is set to .to -80 - e.g.

    $('.js--sc-eNN-01').click(function () {
       $('html, body').animate({scrollTop: $('#js--eNN-01').offset().top -80}, 1000);
    });

   For footnotes, the offset is set to .to -60 - e.g.

    $('.js--sc-fnNN').click(function () {
       $('html, body').animate({scrollTop: $('#js--fnNN').offset().top -80}, 1000);
    });
   ------------------------------------------------------------------------- */


});                                             /* END OF PAGE READY FUNCTION */
