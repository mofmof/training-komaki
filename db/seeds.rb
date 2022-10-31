# ステータス追加
statuses = [
  {id: 1, name: "未着手"},
  {id: 2, name: "着手中"},
  {id: 3, name: "完了"}
]
statuses.each do |status|
  Status.find_or_create_by(status)
end

# 管理者ユーザー追加
User.create!(name: "admin", email: "admin@example.com", password: "password", role: 1)

# ユーザー追加
User.create!(name: "test1", email: "test1@example.com", password: "password", role: 0)
User.create!(name: "test2", email: "test2@example.com", password: "password", role: 0)

# タスク追加
10.times do |n|
  Task.create!(title: "test1のタスク#{n + 1}", detail: "詳細#{n + 1}", limit_on: Time.zone.today + (n + 1), status_id: 1, user_id: 2)
  Task.create!(title: "test2のタスク#{n + 1}", detail: "詳細#{n + 1}", limit_on: Time.zone.today + (n + 1), status_id: 1, user_id: 3)
end
