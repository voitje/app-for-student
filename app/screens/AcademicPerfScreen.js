import * as React from "react";
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    TouchableOpacity
} from "react-native";
import Accordion from "react-native-collapsible/Accordion";
import * as Animatable from 'react-native-animatable';

const SECTIONS = [
    {
        title: '1 КУРС',
    },
    {
        title: '2 КУРС',
    },
    {
        title: '3 КУРС'
    }
];

const SECTIONSTWICE = [
    {
        title: 'МАТЕМАТИКА',
        content: 'РЫБАЛКА 2 3 ЗАЧЕТ НАХ!!1',
        name: 'РЫБАЛКА',
        firstValue: '2',
        secondValue: '3',
        totalValue: 'ЗАЧЕТ'
    },
    {
        title: 'ФИЗИКА',
        content: '3 ЕПТ',
        name: 'РЫБАЛКА',
        firstValue: '2',
        secondValue: '3',
        totalValue: 'ЗАЧЕТ'
    },
];

class AcademicPerfScreen extends React.Component{
    state = {
        activeSections: [],
        activeSectionTwice: [],
    };

    renderHeader = (section, _, isActive) => {
        return (
            <View style={styles.header}>
                <Text style={isActive ? styles.headerTextActive : styles.headerText}>{section.title}</Text>
            </View>
        );
    };

    renderContent = section => {
        return (
            <View style={styles.content}>
                <View>
                    <Text style={styles.gradeText}>
                        {section.name}{" "}
                    </Text>
                </View>
                <View style={section.firstValue > '2' ? styles.gradeGood : styles.gradeBad}>
                    <Text style={styles.gradeText}>
                        {section.firstValue}{" "}
                    </Text>
                </View>
                <View style={section.secondValue > '2' ? styles.gradeGood : styles.gradeBad}>
                    <Text style={styles.gradeText}>
                        {section.secondValue}{" "}
                    </Text>
                </View>
                <View style={section.totalValue > '2' ? styles.gradeGood : styles.gradeBad}>
                    <Text style={styles.gradeText}>
                        {section.totalValue}{" "}
                    </Text>
                </View>
            </View>
        );
    };

    updateSections = activeSections => {
        this.setState({ activeSections });
    };

    updateSectionsTwice = activeSectionTwice => {
        this.setState({activeSectionTwice})
    };


    renderHeaderTwice = (section, _, isActive) => {
        return (
            <View style={styles.header}>
                <Text style={isActive ? styles.headerTextActive : styles.headerText}>{section.title}</Text>
            </View>
        );
    };

    renderContentAccordion = () => {
        return(
            <Accordion
                sections={SECTIONSTWICE}
                renderHeader={this.renderHeaderTwice}
                touchableComponent={TouchableOpacity}
                renderContent={this.renderContent}
                onChange={this.updateSectionsTwice}
                activeSections={this.state.activeSectionTwice}/>
        )
    };

    render() {
        //console.log('TWICE', this.state.activeSectionTwice);
        console.log('FIRST', this.state.activeSections);
        return (
            <View style={styles.container}>
                <Accordion
                    sections={SECTIONS}
                    activeSections={this.state.activeSections}
                    touchableComponent={TouchableOpacity}
                    renderHeader={this.renderHeader}
                    renderContent={this.renderContentAccordion}
                    onChange={this.updateSections}
                />
            </View>
        )
    }
};



const styles = StyleSheet.create({
    container: {
        display: 'flex',
        textAlign: 'center'
    },
    content: {
        display: 'flex',
        flexDirection: 'row',
    },
    contentText: {
        fontSize: 25,
    },
    headerText: {
        fontSize: 50,
        color: '#0066cc'
    },
    headerTextActive: {
        fontSize: 50,
        color: '#555555'
    },
    header: {

    },
    gradeGood: {
        backgroundColor: '#c4efaa',
        borderWidth: 1,
        borderColor: '#ddd',
    },
    gradeBad: {
        backgroundColor: '#fe9d94',
        borderWidth: 1,
        borderColor: '#ddd',
    },
    gradeText: {
        fontSize: 25,
    }
});

export default AcademicPerfScreen;