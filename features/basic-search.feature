Feature: Quartex Basic Search

    Scenario: Carry out basic search
        Given the user is on the Quartex site
        When the user enters the search term "Brown"
        Then the user is navigated to the url "documents"
        And the first page of search results is displayed
        And the asset "1 April 1875. Browning, Robert to Pollock, Lady." is listed

    Scenario: Filtering Search Results
        Given the user has performed a search for "Brown"
        When the user selects to filter the search results by the collection "Interwar Periodicals"
        And the user clicks the button "Apply"
        Then the asset "Woman's Weekly, July-December 1919" is listed

    Scenario: Search returns no results
        Given the user has performed a search for "Quartex"
        When there are no assets meeting the search criteria
        Then a message is output informing the user that no results are available
