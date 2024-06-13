package svc

import (
	"backend/application/applet/internal/config"
	"backend/application/user/rpc/user"
	"github.com/zeromicro/go-zero/core/stores/redis"
	"github.com/zeromicro/go-zero/zrpc"
)

type ServiceContext struct {
	Config   config.Config
	UserRPC  user.User
	BizRedis *redis.Redis
}

func NewServiceContext(c config.Config) *ServiceContext {

	userRPC := zrpc.MustNewClient(c.UserRPC)
	//userRPC, err := zrpc.NewClient(c.UserRPC)
	//if err != nil {
	//	return err
	//}
	return &ServiceContext{
		Config:   c,
		UserRPC:  userRPC,
		BizRedis: redis.New(c.BizRedis.Host, redis.WithPass(c.BizRedis.Pass)),
	}
}
