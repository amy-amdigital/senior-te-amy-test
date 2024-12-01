Feature: Quartex Timeline Content Item Block

    Scenario: Open timeline link in new tab
        Given the user is on the Quartex site
        And the user selects the navigation dropdown "Discovery Aids" and navigates to "The Brownings: A Brief History"
        When the Timeline is visible
        And the user clicks a hyperlink available on the Timeline content block
        Then the correct webpage is launched in a new tab
