

/* PRACTICALSERIES (c) 2017

*******************************************************************************
Title :          LOCAL SCROLL - JQUERY                          11-05-SCROLL.JS
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
16 Apr 2019   P17          M. Gledhill    Published

10 Apr 2019   d-P16.11.02  M. Gledhill    Page created
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
        "<p>scroll.js&nbsp;&mdash;&nbsp;P17</p>" /* LOCAL JS REVISION NUMBER */
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
    $('.js--sc-110500').click(function () {     /* START of scroll function */
       $('html, body').animate({scrollTop: $('#js--110500').offset().top -20}, 250);
    });                                         /* END of scroll function */

    $('.js--sc-110501').click(function () {     /* START of scroll function */
       $('html, body').animate({scrollTop: $('#js--110501').offset().top -20}, 1000);
    });                                         /* END of scroll function */

    $('.js--sc-110502').click(function () {     /* START of scroll function */
       $('html, body').animate({scrollTop: $('#js--110502').offset().top -20}, 1000);
    });                                         /* END of scroll function */

    $('.js--sc-110503').click(function () {     /* START of scroll function */
       $('html, body').animate({scrollTop: $('#js--110503').offset().top -20}, 1000);
    });                                         /* END of scroll function */

    $('.js--sc-110504').click(function () {     /* START of scroll function */
       $('html, body').animate({scrollTop: $('#js--110504').offset().top -20}, 1000);
    });                                         /* END of scroll function */

    $('.js--sc-110505').click(function () {     /* START of scroll function */
       $('html, body').animate({scrollTop: $('#js--110505').offset().top -20}, 1000);
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

    $('.js--sc-f11-40').click(function () {
       $('html, body').animate({scrollTop: $('#js--f11-40').offset().top -80}, 1000);
    });

    $('.js--sc-c11-16').click(function () {
       $('html, body').animate({scrollTop: $('#js--c11-16').offset().top -120}, 1000);
    });

});                                             /* END OF PAGE READY FUNCTION */