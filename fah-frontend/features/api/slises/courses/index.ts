import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_PATH } from "@/shared/configs/constants/api/paths";
import { CreateCourseProcess, GetCoursesProcess } from "@/shared/types/api/courses";

export const coursesSlice = createApi({
  reducerPath: "api/courses",
  baseQuery: fetchBaseQuery({
    baseUrl: `${ API_PATH }/academic`,
    credentials: "include"
  }),
  tagTypes: ["apiCourses"],
  refetchOnReconnect: true,
  endpoints: (builder) => ({
    getAllCourses: builder.query<GetCoursesProcess["responseBody"], string>({
      query: (body) => ({
        url: `getCourseList?${ body }`,
        method: "GET"
      }),
      providesTags: ["apiCourses"]
    }),
    createNew: builder.mutation<CreateCourseProcess["responseBody"], CreateCourseProcess["requestBody"]>({
      query: (body) => ({
        url: "addNewCourse",
        method: "POST",
        body: body
      }),
      invalidatesTags: ["apiCourses"]
    })
  })
});

export const {
  useGetAllCoursesQuery,
  useLazyGetAllCoursesQuery,
  useCreateNewMutation
} = coursesSlice;