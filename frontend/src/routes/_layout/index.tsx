import { Box, Container, Flex, Text } from "@chakra-ui/react"
import { createFileRoute } from "@tanstack/react-router"
import Chart from "react-apexcharts"
import InsightPanel from "../../components/Insights/InsightPanel"

import useAuth from "@/hooks/useAuth"
import GraphPanel from "@/components/Dashboard/GraphPanel"

export const Route = createFileRoute("/_layout/")({
  component: Dashboard,
})


function Dashboard() {
  const { user: currentUser } = useAuth()

  return (
    <Flex>
      <GraphPanel />
      <InsightPanel />
    </Flex>
  )
}
