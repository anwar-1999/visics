import './index.css';

const ApplicationList = (
    {
        applications,
        filterStatus,
        deleteApplication,
        setCurrentApplication
    }: any) => {

    const filteredApps = filterStatus === 'all'
        ? applications
        : applications.filter((app: any) => app?.status === filterStatus);

    return (
        <ul className="space-y-4">
            {(filteredApps || [])?.map((app: any) => (
                <li key={app.id} className=" mt-1 border p-4 md:flex  md:justify-between md:items-center">
                    <div>
                        <p><strong>Job Title:</strong> {app?.jobTitle ? app?.jobTitle : '-'}</p>
                        <p><strong>Company:</strong> {app?.companyName ? app?.companyName : '-'}</p>
                        <p><strong>Date Applied:</strong> {app?.dateApplied ? app?.dateApplied : '-'}</p>
                        <p><strong>Status:</strong> {app?.status ? app?.status : '-'}</p>
                    </div>
                    <div className='mb-1 mt-2'>
                        <button
                            onClick={() => setCurrentApplication(app)}
                            className="bg-yellow-500 text-white p-2 mr-2 mb-2 w-1/2 md:w-auto"
                        >
                            Edit
                        </button>
                        <button
                            onClick={() => deleteApplication(app.id)}
                            className="bg-red-500 text-white p-2  w-1/2 mb-2 md:w-auto"
                        >
                            Delete
                        </button>
                    </div>
                </li>
            ))}
        </ul>

    );
};

export default ApplicationList;
