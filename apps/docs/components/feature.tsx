import { Activity, Cable, LucideIcon, ShieldUser } from 'lucide-react';

const Feature = () => {
  return (
    <div className="flex flex-col md:flex-row gap-8 mt-20">
      <Card
        icon={Cable}
        title="Simple Adoption"
        description="Create a dedicated route for sandbox usage and directly export withSandbox in page.tsx."
      />
      <Card
        icon={Activity}
        title="Monitoring"
        description="Monitor execution status, logs, and performance metrics (AVG, P75, P95)."
      />
      <Card
        icon={ShieldUser}
        title="Access Control"
        description="Provide middleware methods to conveniently enable the sandbox for specific users or specific environments."
      />
    </div>
  );
};

const Card = ({
  icon: Icon,
  title,
  description,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
}) => {
  return (
    <div className="bg-fd-secondary p-6 rounded-2xl flex-1">
      <div className="p-2 bg-gray-200 w-fit rounded-xl">
        <Icon className="size-6 text-gray-400" />
      </div>
      <h3 className="font-bold mt-3">{title}</h3>
      <p className="mt-2 text-sm text-fd-muted-foreground">{description}</p>
    </div>
  );
};

export default Feature;
