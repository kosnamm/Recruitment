package xcode

import (
	"backend/pkg/xcode/types"
	"net/http"
)

// make a handler

func ErrHandler(err error) (int, any) {
	// turn err to xcode
	code := CodeFromError(err)

	return http.StatusOK, types.Status{
		Code:    int32(code.Code()),
		Message: code.Message(),
	}
}
