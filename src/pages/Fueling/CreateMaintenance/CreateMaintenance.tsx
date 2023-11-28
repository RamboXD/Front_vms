import React from "react";
import { Layout } from "@/components";
import { CreateMaintenanceTable } from "@/pages/Maintenance/components/CreateMaintenanceTable";

const CreateMaintenance: React.FC = () => {
  return (
    <Layout>
      <p className="text-xl font-semibold">Create Task</p>
      <CreateMaintenanceTable />
    </Layout>
  );
};

export default CreateMaintenance;
