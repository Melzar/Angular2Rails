When(/^I enter main page$/) do
  visit('/')
end

Then(/^I should see app works$/) do
  expect(page).to have_content('app works')
end