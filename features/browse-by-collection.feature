Feature: Browse by collection

    Scenario: Scroll to collection
        Given the user is on the Quartex site
        And the user selects the navigation item "Explore the Collections"
        When the user selects the letter "W"
        Then the page is scrolled to show all collections starting with "W"

    Scenario: View collection from letter
        Given the user is on the Quartex site
        And the user selects the navigation item "Explore the Collections"
        When the user clicks on the link "War & Conflict"
        Then the user is navigated to the url "explore-the-collections/war-conflict" 
        And the page header is equal to "War & Conflict"
        And the number of results listed is equal to 18
        And the asset "Memoirs of a Prisoner of War" is listed