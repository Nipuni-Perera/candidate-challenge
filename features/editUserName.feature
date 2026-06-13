Feature: Edit user first name
    Background:
        Given I am logged in as an admin user

    Scenario: Verify Admin user should be able to update user's first name successfully
        When I navigate to Users page
        Then I should see first user email as 'max.mustermann@helloagain.at'
        And I open the user details page
        When I update the first name to "Maximilian" and save the changes
        Then the user full name should display as "Maximilian Mustermann"
