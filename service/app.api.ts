import {
  BlogPost,
  BlogPostResponse,
  JobApplicationResponse,
  JobAppplicationRequest,
  NewsArticlesRequest,
  NewsArticlesResponse,
  NewsletterSubscribeResponse,
  DepartmentResponse,
  JobsByDepartmentResponse,
} from "./api.interface";
import fetchClient from "./fetchClient";

const baseURL = `${process.env.NEXT_PUBLIC_UNBIASLY_BASE_API_URL}`;
const devURL = `${process.env.NEXT_PUBLIC_UNBIASLY_DEV_API_URL}`;

const AppApi = {
    getArticles: (body: NewsArticlesRequest) =>
        fetchClient.post<NewsArticlesResponse>(`${baseURL}/v1/getArticles`, body),
    
    subscribeToNewsletter: (email: string) =>
        fetchClient.post<NewsletterSubscribeResponse>(`${baseURL}/v1/subscribe`, {
        email,
        }),
    getBlogPosts: (page: number, limit = "4") =>
        fetchClient.get<BlogPostResponse>(
        `${baseURL}/blogs?` +
            new URLSearchParams({ page: page.toString(), limit }).toString()
        ),
    getBlogPost: (id: string) =>
        fetchClient.get<BlogPost>(`${baseURL}/blog/${id}`),

    getDepartment: () =>
        fetchClient.get<DepartmentResponse>(`${devURL}/v1/guest-user/department`),

    getJobByDepartment: (department: string) =>
        fetchClient.get<JobsByDepartmentResponse>(`${devURL}/v1/guest-user/department/${department}`),
    
    getJobById: async (jobId: string) => {
        try {
            // Get all departments
            const deptResponse = await fetchClient.get<DepartmentResponse>(`${devURL}/v1/guest-user/department`);
            

            for (const dept of deptResponse.data) {
                const jobsResponse = await fetchClient.get<JobsByDepartmentResponse>(
                    `${devURL}/v1/guest-user/department/${dept.name}`
                );
                
                // job_id is the id of the job
                const foundJob = jobsResponse.find(job => job.job_id === jobId);
                if (foundJob) {
                    return { data: foundJob };
                }
            }
            
            throw new Error('Job not found');
        } catch (error) {
            console.error('Error fetching job by ID:', error);
            throw error;
        }
    },

    postAutofillResume: (formData: FormData) =>
        fetchClient.post<{data: JobAppplicationRequest}>(`${devURL}/v1/guest-user/resume-ai-scanner`, formData),

    postJobApply: (data: {
        file: File,
        parsed_data: JobAppplicationRequest,
        resume_email: string,
        resume_name: string,
        job_id: string
    }) => {
        const formData = new FormData();
        
        // Append file
        formData.append('file', data.file);
        
        // Append parsed_data as a JSON string
        formData.append('parsed_data', JSON.stringify(data.parsed_data));
        
        // Append other fields
        formData.append('resume_email', data.resume_email);
        formData.append('resume_name', data.resume_name);
        formData.append('job_id', data.job_id);

        return fetchClient.post<JobApplicationResponse>(
            `${devURL}/v1/guest-user/resume-ai-scanner/submit`,
            formData
        );
    },

    
};

export default AppApi;
