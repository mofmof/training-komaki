# ステータス追加
Status.create(name: "未着手")
Status.create(name: "着手中")
Status.create(name: "完了")

# タスク追加
10.times do |n|
  Task.create!(title: "タスク#{n + 1}", detail: "詳細#{n + 1}", limit_on: Time.zone.today + 3, status_id: 1)
end
