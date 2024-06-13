// Code generated by goctl. DO NOT EDIT.
package types

type LoginRequest struct {
	Name     string `json:"name"`
	Password string `json:"password"`
}

type LoginResponse struct {
	UserId int64 `json:"user_id"`
}

type RegisterRequest struct {
	Name     string `json:"name"`
	Password string `json:"password"`
}

type RegisterResponse struct {
	UserId int64 `json:"user_id"`
}

type UserInfoResponse struct {
	UserId   int64  `json:"user_id"`
	Username string `json:"username"`
}
