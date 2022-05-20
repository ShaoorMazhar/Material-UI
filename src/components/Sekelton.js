import Btn from "../components/Button";
import Grid from "@mui/material/Grid";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../theme";
import PrimarySearchAppBar from "../components/Appbar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import PrimaryButton from "../components/PrimaryButton";
import CustomLink from "../components/Link";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import { useState, useEffect } from "react";
import { Stack, Skeleton } from "@mui/material";
export default function Sekelton() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <Grid container xs={12}>
        {loading ? (
          <Skeleton
            variant="rectangular"
            width="100%"
            height={60}
            animation="wave"
          />
        ) : (
          <Grid item xs={12}>
            <PrimarySearchAppBar />
          </Grid>
        )}
        <Grid
          container
          xs={12}
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Grid container={12} maxWidth={"md"} mt={9}>
            <Grid item xs={2}></Grid>
            <Grid item xs={8}>
              <Box
                component="span"
                sx={{
                  color: "primary.dark",
                  display: "flex",
                  justifyContent: "center",
                  fontSize: "1.6rem",
                }}
              >
                {loading ? (
                  <Stack spacing={2} width={125}>
                    <Skeleton variant="h2" width={125} animation="wave" />
                  </Stack>
                ) : (
                  <Typography variant="h4">Pricing</Typography>
                )}
              </Box>
            </Grid>
            <Grid item xs={2}></Grid>
            <Grid item xs={2}></Grid>
            <Grid item xs={8}>
              <Box
                component="span"
                sx={{
                  color: "secondary.dark",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                {loading ? (
                  <Stack
                    sx={{
                      display: "flex",
                      flexDirection: "coloum",
                      alignItems: "center",
                    }}
                  >
                    <Skeleton
                      variant="h3"
                      width={580}
                      animation="wave"
                      sx={{ marginTop: "30px" }}
                    />
                    <Skeleton
                      variant="h3"
                      width={560}
                      animation="wave"
                      sx={{ marginTop: "18px" }}
                    />
                    <Skeleton
                      variant="h3"
                      width={490}
                      animation="wave"
                      sx={{ marginTop: "18px" }}
                    />
                    <Skeleton
                      variant="h3"
                      width={200}
                      animation="wave"
                      sx={{ marginTop: "18px" }}
                    />
                  </Stack>
                ) : (
                  <Typography variant="h6">
                    Quickly build an effective pricing table for your potential
                    customers with this layout. It's built with default MUI
                    components with little customization.
                  </Typography>
                )}
              </Box>
            </Grid>
            <Grid item xs={2}></Grid>
            <Grid
              item
              xs={12}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                paddingBottom: "20px",
              }}
            >
              {loading ? (
                <Stack>
                  <Skeleton width={100} height={60} animation="wave" />
                </Stack>
              ) : (
                <Btn name="Download" />
              )}
            </Grid>
            <Grid
              container
              mb={4}
              sx={{
                height: "max-content",
                borderBottom: "1px solid #EDE7F6",
                paddingBottom: "35px",
              }}
            >
              <Grid
                item
                lg={4}
                md={4}
                sm={6}
                xs={12}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "flex-end",
                }}
              >
                {loading ? (
                  <Stack>
                    <Skeleton
                      variant="rectangular"
                      width={250}
                      height={300}
                      animation="wave"
                    />
                  </Stack>
                ) : (
                  <Box
                    mb={2.5}
                    sx={{
                      height: "308.9px",
                      border: "1px solid #EDE7F6",
                      boxShadow: "0px 1px",
                      width: "86%",
                      borderRadius: "10px",
                      overflow: "hidden",
                    }}
                  >
                    <Grid
                      item={12}
                      sx={{
                        height: "69px",
                        backgroundColor: "#EDE7F6",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "secondary.light",
                      }}
                    >
                      <Typography variant="h6">Free</Typography>
                    </Grid>
                    <Grid
                      item={12}
                      sx={{
                        height: "70px",
                        color: "primary.light",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Typography variant="h3">$0</Typography>
                      <Typography variant="subtitle1" color="primary.light">
                        /mo
                      </Typography>
                    </Grid>
                    <Grid
                      item={12}
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      <Typography variant="subtitle2">
                        10 users included
                      </Typography>
                      <Typography variant="subtitle2">
                        2 GB of storage
                      </Typography>
                      <Typography variant="subtitle2">
                        Help center access
                      </Typography>
                      <Typography variant="subtitle2">Email support</Typography>
                    </Grid>
                    <Grid
                      item={12}
                      mt={2.3}
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        flexDirection: "column",
                        padding: "10px",
                      }}
                    >
                      <PrimaryButton name="Sign up for free" />
                    </Grid>
                  </Box>
                )}
              </Grid>
              <Grid
                item
                lg={4}
                md={4}
                sm={6}
                xs={12}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "flex-end",
                }}
              >
                {loading ? (
                  <Stack>
                    <Skeleton
                      variant="rectangular"
                      width={250}
                      height={330}
                      animation="wave"
                    />
                  </Stack>
                ) : (
                  <Box
                    mb={2.5}
                    sx={{
                      height: "332.9px",
                      border: "1px solid #EDE7F6",
                      boxShadow: "0px 1px",
                      width: "86%",
                      borderRadius: "10px",
                      overflow: "hidden",
                    }}
                  >
                    <Grid
                      item={12}
                      sx={{
                        height: "92px",
                        backgroundColor: "#EDE7F6",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexDirection: "column",
                        position: "relative",
                      }}
                    >
                      <StarOutlineIcon
                        sx={{ position: "absolute", top: "10px", right: "6px" }}
                      />
                      <Typography variant="h6" color="secondary.light">
                        Pro
                      </Typography>
                      <Typography color="primary.light">
                        Most Popular
                      </Typography>
                    </Grid>
                    <Grid
                      item={12}
                      sx={{
                        height: "70px",
                        color: "primary.light",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Typography variant="h3">$15</Typography>
                      <Typography variant="subtitle1" color="primary.light">
                        /mo
                      </Typography>
                    </Grid>
                    <Grid
                      item={12}
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        flexDirection: "column",
                        alignItems: "center",
                        color: "primary.dark",
                      }}
                    >
                      <Typography variant="subtitle2">
                        20 users included
                      </Typography>
                      <Typography variant="subtitle2">
                        10 GB of storage
                      </Typography>
                      <Typography variant="subtitle2">
                        Help center access
                      </Typography>
                      <Typography variant="subtitle2">
                        Priority Email support
                      </Typography>
                    </Grid>
                    <Grid
                      item={12}
                      mt={2.3}
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        flexDirection: "column",
                        padding: "10px",
                      }}
                    >
                      <Btn name="Get started" />
                    </Grid>
                  </Box>
                )}
              </Grid>
              <Grid
                item
                lg={4}
                md={4}
                sm={12}
                xs={12}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "flex-end",
                }}
              >
                {loading ? (
                  <Stack>
                    <Skeleton
                      variant="rectangular"
                      width={250}
                      height={300}
                      animation="wave"
                    />
                  </Stack>
                ) : (
                  <Box
                    mb={2.5}
                    sx={{
                      height: "308.9px",
                      border: "1px solid #EDE7F6",
                      boxShadow: "0px 1px",
                      width: "86%",
                      borderRadius: "10px",
                      overflow: "hidden",
                    }}
                  >
                    <Grid
                      item={12}
                      sx={{
                        height: "69px",
                        backgroundColor: "#EDE7F6",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "secondary.light",
                      }}
                    >
                      <Typography variant="h6">Enterprise</Typography>
                    </Grid>
                    <Grid
                      item={12}
                      sx={{
                        height: "70px",
                        color: "primary.light",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Typography variant="h3">$30</Typography>
                      <Typography variant="subtitle1" color="primary.light">
                        /mo
                      </Typography>
                    </Grid>
                    <Grid
                      item={12}
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        flexDirection: "column",
                        alignItems: "center",
                        color: "primary.dark",
                      }}
                    >
                      <Typography variant="subtitle2">
                        50 users included
                      </Typography>
                      <Typography variant="subtitle2">
                        30 GB of storage
                      </Typography>
                      <Typography variant="subtitle2">
                        Help center access
                      </Typography>
                      <Typography variant="subtitle2">
                        Phone & Email support
                      </Typography>
                    </Grid>
                    <Grid
                      item={12}
                      mt={2.3}
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        flexDirection: "column",
                        padding: "10px",
                      }}
                    >
                      <PrimaryButton name="Contact us" />
                    </Grid>
                  </Box>
                )}
              </Grid>
            </Grid>
            <Grid
              container
              sx={{
                padding: "20px",
              }}
            >
              <Grid
                item
                sm={3}
                xs={6}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  paddingBottom: "20px",
                }}
              >
                {loading ? (
                  <Stack>
                    <Skeleton variant="h3" width={100} animation="wave" />
                    <Skeleton
                      variant="h4"
                      width={100}
                      animation="wave"
                      sx={{ marginTop: "10px" }}
                    />
                  </Stack>
                ) : (
                  <>
                    <Typography variant="subtitle2">Company</Typography>
                    <CustomLink text="Team" />
                    <CustomLink text="History" />
                    <CustomLink text="Contact us" />
                    <CustomLink text="Location" />{" "}
                  </>
                )}
              </Grid>
              <Grid
                item
                sm={3}
                xs={6}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  paddingBottom: "20px",
                }}
              >
                {loading ? (
                  <Stack>
                    <Skeleton variant="h3" width={100} animation="wave" />
                    <Skeleton
                      variant="h4"
                      width={100}
                      animation="wave"
                      sx={{ marginTop: "10px" }}
                    />
                  </Stack>
                ) : (
                  <>
                    <Typography variant="subtitle2">Features</Typography>
                    <CustomLink text="Cool stuff" />
                    <CustomLink text="Random Feature" />
                    <CustomLink text="Team Feature" />
                    <CustomLink text="Developer Stuff" />
                    <CustomLink text="Another one" />
                  </>
                )}
              </Grid>
              <Grid
                item
                sm={3}
                xs={6}
                sx={{ display: "flex", flexDirection: "column" }}
              >
                {loading ? (
                  <Stack>
                    <Skeleton variant="h3" width={100} animation="wave" />
                    <Skeleton
                      variant="h4"
                      width={100}
                      animation="wave"
                      sx={{ marginTop: "10px" }}
                    />
                  </Stack>
                ) : (
                  <>
                    <Typography variant="subtitle2">Resources</Typography>
                    <CustomLink text="Resources" />
                    <CustomLink text="Another Resource" />
                    <CustomLink text="Resource Name" />
                    <CustomLink text=" Final Resource" />
                  </>
                )}
              </Grid>
              <Grid
                item
                sm={3}
                xs={6}
                sx={{ display: "flex", flexDirection: "column" }}
              >
                {loading ? (
                  <Stack>
                    <Skeleton variant="h3" width={100} animation="wave" />
                    <Skeleton
                      variant="h4"
                      width={100}
                      animation="wave"
                      sx={{ marginTop: "10px" }}
                    />
                  </Stack>
                ) : (
                  <>
                    <Typography variant="subtitle2">Legal</Typography>
                    <CustomLink text="Privacy Policy" />
                    <CustomLink text="Terms of use" />
                  </>
                )}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
