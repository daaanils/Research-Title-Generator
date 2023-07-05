
const researchs = [
    {title: 'Deployment of OpenCV for Embedded Systems and Multicore'},
    {title: 'Mobile desktop PC Remote'},
    {title: 'Text Classification using Machine Learnin'},
    {title: 'Come and talk about topics of mutual interest'},
    {title: 'RFID based Airport Luggage Security Scanning System'},
    {title: 'RoboCup Standard League'},
    {title: 'SNOMED-based Surgical Audit tool'},
    {title: 'Real-time abnormal activity detection in surveillance systems'},
    {title: 'Analysis and Debugging Techniques of Android Platform'},
    {title: 'Poverty Heat Map using GIS Application'},
    {title: 'Verification of Secure Transaction Protocols'},
    {title: 'Customer Relationship Management (CRM) using Microsoft Dynamics'},
    {title: 'Robust CSV to ShapeFile Utility and DBF File Interpreter'},
    {title: 'Camera-Based Heart Rate Detector using Android'},
    {title: 'General Game-Playing Robot'},
    {title: 'Faculty Information System'},
    {title: 'Payroll System with Biometric and Barcode Technology'},
    {title: 'Runtime Mapping of Tasks for the ARGUS Multicore Platform'},
    {title: 'SDSUHood'},
    {title: 'Motion Detector using Arduino with SMS Notification'},
    {title: 'GPS based Vehicle theft detection system using GSM technology'},
    {title: 'Verification framework for concurrent C programs'},
    {title: 'School Locator using Android'},
    {title: 'Web Application Development for San Diego Cricket Club'},
    {title: 'Advertisement Management System'},
    {title: 'Voice Command with bluetooth using Direct Object Speech library'},
    {title: 'Entrance Examination'},
    {title: 'Stability of matchings'},
    {title: 'Interactive World Map Man Made Disasters'},
    {title: 'library system'},
    {title: 'Android Based Controlled Door Security Locking App'},
    {title: 'GIS Learning Tool for USA Tallest Skyscrapers and Their Construction'},
    {title: 'Verifying concurrent programs running on a real-time OS'},
    {title: 'Web and Mobile Based School Publication System with Forum'},
    {title: 'Domain Specific Modelling Language Design for Model Driven Development'},
    {title: 'Web and Mobile Green House Management System'},
    {title: 'Medical records system'},
    {title: 'Library Automation Project using RFID'},
    {title: 'Water Billing System PHP/MySQL'},
    {title: 'Pro Bono Law Resource Centre Database'},
    {title: 'Group Messenger Application using Android'},
    {title: 'Field Testing and Performance Evaluation of a Mobile-Platform-Based QR Code Reader for Multilingual Public Information Display Applications'},
    {title: 'Online Complaint Management and Evaluation System'},
    {title: 'Enhancement of MC Simulator Macros to Support Floating Point Number'},
    {title: 'Dynamic Projection of Data on Maps Based on Time-lines Client Side'},
    {title: 'Registration and Synchronized Visualization of Multi-Modal D Magnetic Resonance Images'},
    {title: 'Online Health Management Information System and Data Warehouse using CodeIgniter and PostgreSQL'},
    {title: 'Online payroll system'},
    {title: 'Adaptive Low Bit Rate Video Streaming Over Wireless Networks'},
    {title: 'API development for Application Analysis using CLANG/LLVM'},
    {title: 'Hardware development on the ESLoC Multiprocessor Platform'},
    {title: 'Chart feature facility packaged for map object java edition'},
    {title: 'Mobile Nutrition Application with Admin Panel (jquery mobile, php, mysql, apache cordova)'},
    {title: 'Student Assessment System'},
    {title: 'Human Resource Management System'},
    {title: 'Online Lot Reservation'},
    {title: 'Event Planner Mobile App'},
    {title: 'Centralized Medical System using Different Sensor for Vital signs Detector'},
    {title: 'Herbal Plants Information System'},
    {title: 'Smart School Management System'},
    {title: 'Gamification in Education'},
    {title: 'Social Network Analysis for Student Collaboration'},
    {title: 'Machine Learning for Adaptive Lesson Planning'},
    {title: 'Mobile Application for Campus Navigation'},
    {title: 'Computer Vision for Automated Grading'},
    {title: 'Designing a New Information System for a Hospital'},
    {title: 'The Impact of Cloud Computing on Cybersecurity'},
    {title: 'The Use of Artificial Intelligence for Detecting and Responding to Cyberattacks'},
    {title: 'Applying Natural Language Processing to Detect Fake News'},
    {title: 'Creating a Mobile App for Tracking Personal Finances'},
    {title: 'Designing a New Information System for a Public School District'},
    {title: 'Developing a System for Managing Supply Chain Logistics'},
    {title: 'Chatbot for Academic Advising'},
    {title: 'Applying Natural Language Processing to Detect Plagiarism in Student Essays'},
    {title: 'Blockchain for Secure and Transparent Student Voting Systems'},
    {title: 'Creating a Mobile App for Tracking Attendance'},
    {title: 'Internet of Things (IoT) for Campus Safety: Enhancing Security Measures'},
    {title: 'Student Feedback Platform: Building a System for Anonymous Feedback Collection'},
    {title: 'School Event Management Application: Planning and Organizing School Events'},
    {title: 'Digital Signage System for School Announcements: Displaying Important Information'},
    {title: 'Online Exam Proctoring System: Ensuring Integrity in Remote Assessments'},
    {title: 'Designing a User-Friendly E-Learning Platform"'},
    
    
    
    







]

const getRandomResearchs = () => {
    const index = Math.floor(Math.random() * researchs.length)
    return researchs[index]
}

const displayResearchs = () => {
    const research = getRandomResearchs()
    const researchText = `${research.title}`
    document.getElementById('research').innerText = researchText
    document.getElementById('research').style.display = 'block';
}

document.getElementById('generate').addEventListener('click', displayResearchs);
