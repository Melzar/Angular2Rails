Before do
  if Rails.env.development?
    system('npm run build:production')
  end
end 