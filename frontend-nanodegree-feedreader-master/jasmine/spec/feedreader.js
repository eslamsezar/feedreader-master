/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
//comment show that allFeeds is't empty & defined
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
            it('have url in allfeeds & not empty', function() {
                for(var i = 0; i < allFeeds.length; i++){
                expect(allFeeds[i].url).toBeDefined();         //check that Url is defined/exist
                expect(allFeeds[i].url.length).not.toBe(0);    //check Url is't empty
            }
        });

        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
         it('have name in allfeeds & not empty', function() {
            for(var i = 0; i < allFeeds.length; i++){
                expect(allFeeds[i].name).toBeDefined();
                expect(allFeeds[i].name.length).not.toBe(0);
            }
        });
    });


    /* TODO: Write a new test suite named "The menu" */
    describe('The menu',function() {


        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
         it('should be hidden by default', function() {
            expect($('body').hasClass('menu-hidden')).toBe(true);
        }); //Using $ to select from DOM and find the Class

         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
          it('should change visibility when clicked', function() {

            $('.menu-icon-link').click(); //it's run when click on link
            expect($('body').hasClass('menu-hidden')).toBe(false);

            $('.menu-icon-link').click();
            expect($("body").hasClass('menu-hidden')).toBe(true);
        });

    });

    /* TODO: Write a new test suite named "Initial Entries" */
    describe('Initial Entries', function() {

        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
         beforeEach(function(done){
            loadFeed(0, done);
        });//load feed before test

         it('should have at least a single entry', function(done) {
            expect($('.feed .entry').length).toBeGreaterThan(0);
            done();
        });
     });

    /* TODO: Write a new test suite named "New Feed Selection" */
    describe('Initial Entries', function() {

        beforeEach(function(done){
            loadFeed(0, done);
        }); // Loads the Feed Before Testing the Spec

        it('Consists of Atleast One Entry When Loaded', function(done) {
            expect($('.feed .entry').length).toBeGreaterThan(0);
            done();
        });

    });

/* Write a new test suite named "New Feed Selection" */
    describe('New Feed Selection', function () {
        var oldfeed,
            newfeed;
        // Declaring another beforeEach function to ensure that a new feed is loaded and content is changed
        beforeEach(function (done) {
            $('.feed').empty();
            loadFeed(0, function () {
                // Save the old feed in a variable
                oldfeed = $('.feed').find("h2").text();
                done();
            });
        });
        /* Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
        it('The content changes when the feed is loaded', function (done) {
            loadFeed(1, function () {
                newfeed = $('.feed').find("h2").text();
                console.log("entries after: " + newfeed);
                expect(oldfeed).not.toEqual(newfeed);
                done();
            });
        });
    });
}());
