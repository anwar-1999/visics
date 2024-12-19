import {
    useState,
    useEffect
} from 'react';
import ApplicationList from './ApplicationList';
import ApplicationForm from './ApplicationForm';
import Filter from './Filter';
import './index.css';

export default function Dashboard() {
    const [applications, setApplications] = useState<any>(
        JSON.parse(localStorage.getItem('applications')) || []
    );
    const [filterStatus, setFilterStatus] = useState<string>('all');
    const [currentApplication, setCurrentApplication] = useState(null);

    useEffect(() => {
        localStorage.setItem('applications', JSON.stringify(applications));
    }, [applications]);

    const addApplication = (newApp: any) => {
        setApplications([...applications, newApp]);
    };

    const deleteApplication = (id: any) => {
        setApplications((applications || [])?.filter((app: any) => app.id !== id));
    };

    const updateApplication = (updatedApp: any) => {
        setApplications((applications || [])?.map((app: any) => app.id === updatedApp.id ? updatedApp : app));
        setCurrentApplication(null);
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">Job Application Dashboard</h1>
            <ApplicationForm
                addApplication={addApplication}
                updateApplication={updateApplication}
                currentApplication={currentApplication}
            />
            <h4 className="text-3xl mb-3 underline">
                Filter
            </h4>
            <Filter setFilterStatus={setFilterStatus} />
            <ApplicationList
                applications={applications}
                filterStatus={filterStatus}
                deleteApplication={deleteApplication}
                setCurrentApplication={setCurrentApplication}
            />
        </div>
    );
};

