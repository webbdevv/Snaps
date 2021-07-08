class Message < ApplicationRecord
    validates :author_id, :channel_id, :body, presence: true

    belongs_to :author,
        foreign_key: :author_id,
        class_name: :User

    belongs_to :channel,
        class_name: :Channel

    
end