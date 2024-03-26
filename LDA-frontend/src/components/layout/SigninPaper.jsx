import {
    TextField,
    Paper,Link,
    Typography,
    Button,Stack, Grid,
} from "@mui/material";

import FormWrapper from "../../components/layout/FormWrapper";
export default function SigninPaper() {

    const link = <Link href="#" underline="none" sx={{color:'primary'}}>Request Now</Link>;
    const spltext = <Typography variant="h1" color={'primary'} display={"inline"}>Back</Typography>;
    const titleFinal = <div>Welcome {spltext}</div>;
    return(
        <> 
            <Paper 
                sx={{p:3.5, borderRadius:4}} 
                elevation={4}
            >
                <FormWrapper 
                    title={titleFinal}
                    sx={{textAlign: 'center'}}
                >
                    <Grid 
                        item xs={16} 
                        sx={{mt:2.6}}
                    >
                        <Typography 
                            variant="body1" 
                            fontWeight={500}
                        >
                            Hey, Enter your details to login to your account
                        </Typography>
                    </Grid>
                    <Grid item xs={16}>
                        <Stack 
                            spacing={4} 
                            sx={{mt:3}}
                        >
                            <TextField 
                                label="Enter Mobile/Email id"
                                type=""
                                fullWidth
                            />
                            <TextField
                                label="Enter Password"
                                fullWidth
                                type="Password" 
                            />
                            <Typography 
                                variant="body1" 
                                display={"flex"}
                            >
                                Having trouble signing in?
                            </Typography>
                        </Stack>
                    </Grid>
                    <Grid item xs={10} sx={{mx:7, mt: 5, mb:2}}>
                        <Button 
                            variant="contained"
                            fullWidth
                        >
                            Sign in
                        </Button>
                    </Grid>
                        
                   
                    <Grid item xs={16}>
                        <Typography variant="body1">
                            Dont have an account? {link}
                        </Typography>
                    </Grid>
                    
                </FormWrapper>
            </Paper>
        </>
    );
};