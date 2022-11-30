require 'rails_helper'

RSpec.describe User, type: :model do
  it "is valid with a name, email, password" do
    user = User.new(
      name: "test",
      email: "test@example.com",
      password: "password"
    )
    expect(user).to be_valid
  end

  it "is invalid without email" do
    user = User.new(
      name: "test",
      email: nil,
      password: "password"
    )
    user.valid?
    expect(user.errors[:email]).to include("can't be blank")
  end

  it "is invalid without password" do
    user = User.new(
      name: "test",
      email: "test@example.com",
      password: nil
    )
    user.valid?
    expect(user.errors[:password]).to include("can't be blank")
  end

  it "is invalid wirh a duplicate email address" do
    User.create(
      name: "test",
      email: "test@example.com",
      password: "password"
    )
    user = User.new(
      name: "test999",
      email: "test@example.com",
      password: "password"
    )
    user.valid?
    expect(user.errors[:email]).to include("has already been taken")
  end
end
