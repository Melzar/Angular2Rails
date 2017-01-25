When(/^I enter main page$/) do
  visit('/#/home')
end

Then(/^I should see home works$/) do
  expect(page).to have_content('home works')
end