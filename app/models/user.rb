class User < ApplicationRecord
    before_validation :downcase_email
    before_save { email.downcase! }

    VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-]+(\.[a-z\d\-]+)*\.[a-z]+\z/i


    validates :name, presence: true, length: {maximum: 50}
    validates :email, presence: true, length: {maximum: 255}, format: { with: VALID_EMAIL_REGEX }, uniqueness: true

    has_secure_password

    validates :password, presence: true, length: { minimum: 6}

    private
        def downcase_email
            email.downcase! if email.present?
        end
end
