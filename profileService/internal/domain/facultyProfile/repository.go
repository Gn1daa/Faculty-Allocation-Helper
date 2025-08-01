package facultyProfile

import "context"

type Repository interface {
	AddProfile(ctx context.Context, profile *UserProfile) error
	GetProfileByID(ctx context.Context, profileID int64) (*UserProfile, error)
	UpdateProfileByID(ctx context.Context, profile *UserProfile) error
	GetProfileIDsByInstituteIDs(ctx context.Context, instituteIDs []int64) ([]int64, error)
	GetProfileIDsByPositionIDs(ctx context.Context, positionIDs []int64) ([]int64, error)
}
