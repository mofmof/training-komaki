class InviteMailer < ApplicationMailer
  def invite_to_team(invitation)
    @path = "teams/#{invitation.team_id}/#{invitation.token}"
    mail to: invitation.email, subject: "チームから招待されています"
  end
end
