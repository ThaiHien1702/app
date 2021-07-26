import React from 'react'
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: '6px 16px',
    },
    secondaryTail: {
        backgroundColor: theme.palette.secondary.main,
    },
}));

const Overview = () => {
    const classes = useStyles();
    return (
        <Container maxWidth="md" style={{ paddingTop: '100px' }}>
            <Timeline align="alternate">

                <TimelineItem>
                    <TimelineOppositeContent>
                        <Typography variant="body2" color="textSecondary">9:30 am </Typography>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot>
                        </TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        <Paper elevation={3} className={classes.paper}>
                            <Typography variant="h6" component="h1"> Eat</Typography>
                            <Typography>Because you need strength</Typography>
                        </Paper>
                    </TimelineContent>
                </TimelineItem>

                <TimelineItem>
                    <TimelineOppositeContent>
                        <Typography variant="body2" color="textSecondary">10:00 am</Typography>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot >
                        </TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        <Paper elevation={3} className={classes.paper}>
                            <Typography variant="h6" component="h1">Code</Typography>
                            <Typography>Because it&apos;s awesome!</Typography>
                        </Paper>
                    </TimelineContent>
                </TimelineItem>

                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot >
                        </TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        <Paper elevation={3} className={classes.paper}>
                            <Typography variant="h6" component="h1">Sleep</Typography>
                            <Typography>Because you need rest</Typography>
                        </Paper>
                    </TimelineContent>
                </TimelineItem>

                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot >
                        </TimelineDot>
                    </TimelineSeparator>
                    <TimelineContent>
                        <Paper elevation={3} className={classes.paper}>
                            <Typography variant="h6" component="h1">Repeat</Typography>
                            <Typography>Because this is the life you love!</Typography>
                        </Paper>
                    </TimelineContent>
                </TimelineItem>
            </Timeline>
        </Container>
    )
}

export default Overview;



import React, { Component } from 'react'
import Container from '@material-ui/core/Container';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import CareerService from '../../Shared/CareerService'
import TimelineDot from '@material-ui/lab/TimelineDot';
import { Paper, Button, Typography } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import FormCareer from '../../Detail/FormCareer';
import _FormCareer from '../../Detail/FormCareer';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TodayIcon from '@material-ui/icons/Today';
import SchoolIcon from '@material-ui/icons/School';
import Slide from '@material-ui/core/Slide';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import InfiniteScroll from 'react-infinite-scroll-component';


class Overview extends Component {
    constructor(props) {
        super(props);
        this.state = {
            anchorEl: false,
            open: false,
            _open: false,
            careers: [],
            sliceNumber: 1,
            userId: '60b9aab51f194c0c78c9932b',
            indexOfCert: ""
        }
    }
    componentDidMount() {
        let careerArr = []
        careerArr.push(CareerService.getUserById(this.state.userId))
        Promise.all(careerArr).then(([res]) => {
            let careers = res.data.certificates
            this.setState({
                careers
            })
        })
    }
    showMore = () => {
        const { sliceNumber, careers } = this.state
        if (careers.length > sliceNumber) {

            this.setState({
                sliceNumber: sliceNumber + 1
            })
        }
    }

    handleClickOpen = (index) => {
        this.setState({
            open: true,
            indexOfCert: index
        })
    };
    handleClose = () => {
        this.setState({
            open: false,
        })
    };

    color = (index) => {
        if (index % 3 == 1) { return "primary" }
        else if (index % 3 == 2) { return "inherit" }
        else { return "grey" }
    }
    render() {
        let idUser = "60b9aab51f194c0c78c9932b";
        let { careers, sliceNumber, indexOfCert } = this.state
        let _index = "-1"
        let dialog = careers.slice(0, sliceNumber).map((row, index) => (
            <TimelineItem key={row.id}>
                <TimelineOppositeContent>
                    <Typography color="textSecondary">{row.recivedAt}</Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot color={this.color(index)}>
                        <SchoolIcon />
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    <Paper className="TimelineContent" Container onClick={() => { this.handleClickOpen(index) }}>

                        <Typography variant="h6" component="h1">{row.name}</Typography>
                        <Typography>{row.certNo}</Typography>
                        <Typography variant="body2" color="textSecondary">{row.major}</Typography>
                        {this.state.open ? <Dialog
                            className="Dialog"
                            fullScreen
                            open={this.state.open}
                        >
                            <Slide direction="up" in={this.state.open} timeout={100}>
                                <AppBar>
                                    <Toolbar>
                                        <IconButton edge="start" color="inherit" onClick={this.handleClose} aria-label="close">
                                            <CloseIcon />
                                        </IconButton>
                                        <Typography variant="h6" >
                                            Sound
                                        </Typography>
                                        <Button autoFocus color="inherit" onClick={this.handleClose}>
                                            save
                                        </Button>
                                    </Toolbar>
                                </AppBar>
                                <_FormCareer idUser={idUser} indexOfCert={indexOfCert} />
                            </Slide>
                        </Dialog> : null}
                    </Paper>
                </TimelineContent>
            </TimelineItem>
        ))
        return (
            <div className="career">

                {/* Dialog */}
                <div>
                    <div className="btn-addNew">
                        <Button variant="contained" color="primary" size="small" onClick={() => { this.handleClickOpen(_index) }}>
                            Thêm mới
                        </Button>
                    </div>
                    <Dialog
                        className="Dialog"
                        paper
                        keepMounted
                        onClose={this.handleClose}
                        aria-labelledby="alert-dialog-slide-title"
                        aria-describedby="alert-dialog-slide-description"
                    >
                        <Slide direction="up" in={this.state.open}>
                            <Paper elevation={100} >
                                <DialogContent>
                                    <FormCareer idUser={idUser} indexOfCert={indexOfCert} />
                                </DialogContent>
                            </Paper>
                        </Slide>
                    </Dialog>
                </div>
                {/*  */}
                <div className="carrer-timeline">
                    <InfiniteScroll
                        dataLength={this.state.sliceNumber}
                        next={() => { this.showMore() }}
                        hasMore={true}
                    >
                        <Timeline >
                            {dialog}
                        </Timeline>
                    </InfiniteScroll>
                </div>

            </div>
        )
    }
}

export default Overview;


.paper{
    padding: 6px 16px,
}
.btn - addNew{
    float: right;
    padding: 10px;

}
.TimelineContent{
    padding: 10px;
    margin: 5px;
}
.career{
    margin: 50px;
    .carrer - timeline{
        width: 800px;

    }
}