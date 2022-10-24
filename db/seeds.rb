# ステータス追加
statuses = [
  {id: 1, name: "未着手"},
  {id: 2, name: "着手中"},
  {id: 3, name: "完了"}
]
statuses.each do |status|
  Status.find_or_create_by(category)
end

# タスク追加
10.times do |n|
  Task.create!(title: "タスク#{n + 1}", detail: "詳細#{n + 1}", limit_on: Time.zone.today + 3, status_id: 1)
end
