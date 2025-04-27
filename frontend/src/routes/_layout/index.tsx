import { Flex, Heading } from "@chakra-ui/react"
import { createFileRoute } from "@tanstack/react-router"
import DashboardTabs from "@/components/Dashboard/DashboardTabs";
import { FilterProvider } from "@/contextProviders/FilterProvider";

const Dashboard: React.FC = () => {
  return (
    <Flex direction="column" gap={3} id="topLevelFlex">
      <Heading size={{ base: "2xl", lg: "3xl"}}>March 19<sup>th</sup> - 26<sup>th</sup>, 2025</Heading>
      <FilterProvider>
        <DashboardTabs />
      </FilterProvider>
    </Flex>
  );
};

export default Dashboard;

export const Route = createFileRoute("/_layout/")({
  component: Dashboard,
});
