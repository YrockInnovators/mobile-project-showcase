10.times do
    Item.create({
        firstname: Faker::OnePiece.character,
        lastname: Faker::OnePiece.akuma_no_mi
    })
end
