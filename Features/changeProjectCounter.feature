Feature: Change Project Counter
  As a project owner
  I use my plan resources
  So that My plan usage is updated

  Scenario: Increase number of member
    Given I am a project owner
    When I increase a member in my project
    Then I have a project usage updated

  Scenario: Decrease number of member
    Given I am a project owner
    When I decrease a member in my project
    Then I have a project usage updated

  Scenario: Increase number of active user
    Given I am a project owner
    When I increase a active user in my project
    Then I have a project usage updated

  Scenario: Decrease number of active user
    Given I am a project owner
    When I decrease a active user in my project
    Then I have a project usage updated
