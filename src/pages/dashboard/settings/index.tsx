import { SyntheticEvent, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Tab, Tabs } from "@mui/material";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import PasswordTab from "src/pages/dashboard/settings/password-tab";
import DetailsTab from "src/pages/dashboard/settings/details-tab";

const Settings = () => {
    const tabs = ["Details", "Password"];
    const [currentTab, setCurrentTab] = useState("Details");
    const onChangeTab = (event: SyntheticEvent<Element, Event>, newValue: string) => setCurrentTab(newValue);

    return (
        <>
            <Helmet>
                <title>Settings</title>
            </Helmet>

            <Container maxWidth="xl">
                <Typography variant="h4"> Settings </Typography>

                <Card sx={{ mt: 2 }}>
                    <Tabs
                        onChange={onChangeTab}
                        sx={{ px: 2 }}
                        value={currentTab}
                    >
                        {
                            tabs.map(tab =>
                                <Tab
                                    key={tab}
                                    label={tab}
                                    value={tab}
                                />
                            )
                        }
                    </Tabs>
                    {
                        currentTab === "Details" &&
                        <DetailsTab />
                    }
                    {
                        currentTab === "Password" &&
                        <PasswordTab />
                    }
                </Card>
            </Container>
        </>
    );
};

export default Settings;
