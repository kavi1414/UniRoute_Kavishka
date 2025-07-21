import React, { useState } from 'react';
<<<<<<< HEAD
import UniSidebar from '../../components/UniSidebar';
import UniHeader from '../../components/UniHeader';
import Footer from '../../components/Footer';
import './AcademicContent.css';

// Dummy data for faculties, courses, subjects
=======
import UniversitySidebar from '../../components/Navigation/UniversitySidebar';
import UniversityNavbar from '../../components/Navigation/UniversityNavbar';
import Footer from '../../components/Footer';

// Initial data for faculties, courses, subjects
>>>>>>> c58690afdcbaf86d63e4e395000c9e3f86743a8d
const initialData = {
  faculties: [
    {
      id: 1,
      name: 'Faculty of Medicine',
      description: 'Leading medical education and research in Sri Lanka',
      dean: 'Prof. Dr. A.B. Peiris',
      established: '1870',
      courses: [
        {
          id: 1,
          name: 'Bachelor of Medicine, Bachelor of Surgery (MBBS)',
          duration: '5 years',
          intake: '200 students/year',
          subjects: [
            {
              id: 1,
              name: 'Anatomy',
              code: 'MED101',
              credits: 4,
<<<<<<< HEAD
              syllabus: 'Human body structure, organ systems, histology basics. This comprehensive course covers the fundamental structures of the human body including skeletal, muscular, cardiovascular, respiratory, nervous, and endocrine systems.',
              content: ['Anatomy Lecture Notes.pdf', 'Lab Manual.pdf', 'Practice Questions.pdf']
            },
            {
              id: 2,
              name: 'Physiology',
              code: 'MED102',
              credits: 4,
              syllabus: 'Body functions, homeostasis, cardiovascular system. Study of normal body functions and mechanisms that maintain life.',
              content: ['Physiology Textbook.pdf', 'Lab Experiments.zip']
=======
              syllabus: {
                overview: 'Human body structure, organ systems, histology basics. This comprehensive course covers the fundamental structures of the human body.',
                objectives: [
                  'Understand basic anatomical terminology and body organization',
                  'Identify major organ systems and their relationships',
                  'Analyze tissue structure and cellular organization',
                  'Apply anatomical knowledge to clinical scenarios'
                ],
                topics: [
                  {
                    title: 'Introduction to Human Anatomy',
                    subtopics: [
                      'Anatomical position and directional terms',
                      'Body planes and sections',
                      'Body cavities and membranes',
                      'Homeostasis and feedback mechanisms'
                    ]
                  },
                  {
                    title: 'Skeletal System',
                    subtopics: [
                      'Bone tissue structure and composition',
                      'Bone development and growth',
                      'Axial skeleton anatomy',
                      'Appendicular skeleton anatomy',
                      'Joint classification and movement'
                    ]
                  }
                ],
                assessment: [
                  'Midterm Examination (30%)',
                  'Laboratory Practicals (25%)',
                  'Final Examination (35%)',
                  'Assignments and Quizzes (10%)'
                ],
                references: [
                  'Gray\'s Anatomy for Students - Drake et al.',
                  'Clinically Oriented Anatomy - Moore et al.',
                  'Atlas of Human Anatomy - Netter',
                  'Anatomy & Physiology - Tortora & Derrickson'
                ]
              },
              content: ['Course Handbook.pdf', 'Mentor Notes.pdf', 'Course Details.pdf']
>>>>>>> c58690afdcbaf86d63e4e395000c9e3f86743a8d
            }
          ]
        }
      ]
    },
    {
      id: 2,
      name: 'Faculty of Engineering',
      description: 'Excellence in engineering education and innovation',
      dean: 'Prof. Eng. C.D. Fernando',
      established: '1912',
      courses: [
        {
          id: 2,
          name: 'Computer Science & Engineering',
          duration: '4 years',
          intake: '150 students/year',
          subjects: [
            {
              id: 3,
              name: 'Data Structures',
              code: 'CS201',
              credits: 3,
<<<<<<< HEAD
              syllabus: 'Arrays, linked lists, stacks, queues, trees, graphs. Implementation and analysis of fundamental data structures.',
              content: ['DS Notes.pdf', 'Programming Examples.zip', 'Assignment Guidelines.pdf']
=======
              syllabus: {
                overview: 'Fundamental data structures and their applications in computer science.',
                objectives: [
                  'Understand the core concepts of data structures',
                  'Implement and use various data structures in programming'
                ],
                topics: [
                  {
                    title: 'Introduction to Data Structures',
                    subtopics: [
                      'Definition and classification',
                      'Abstract Data Types (ADT)'
                    ]
                  }
                ],
                assessment: [
                  'Assignments and Programming Labs (30%)',
                  'Final Examination (35%)'
                ],
                references: [
                  'Data Structures and Algorithms in Java – Goodrich'
                ]
              },
              content: ['Course Handbook.pdf', 'Mentor Notes.pdf', 'Course Details.pdf']
>>>>>>> c58690afdcbaf86d63e4e395000c9e3f86743a8d
            }
          ]
        }
      ]
    }
  ]
};

const AcademicContent = () => {
<<<<<<< HEAD
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);
=======
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
>>>>>>> c58690afdcbaf86d63e4e395000c9e3f86743a8d
  const [data, setData] = useState(initialData);
  const [selectedFaculty, setSelectedFaculty] = useState(null);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [selectedSubject, setSelectedSubject] = useState(null);
  
  // Modal states
<<<<<<< HEAD
  const [showCourseModal, setShowCourseModal] = useState(false);
  const [showSubjectModal, setShowSubjectModal] = useState(false);
  const [showSyllabusModal, setShowSyllabusModal] = useState(false);
  const [showContentModal, setShowContentModal] = useState(false);
  const [showViewModal, setShowViewModal] = useState(false);
  const [viewingFile, setViewingFile] = useState('');
  
  // Form states
  const [courseForm, setCourseForm] = useState({ name: '', duration: '', intake: '' });
  const [subjectForm, setSubjectForm] = useState({ name: '', code: '', credits: '', syllabus: '' });
  const [editingCourse, setEditingCourse] = useState(null);
  const [editingSubject, setEditingSubject] = useState(null);
  const [contentFile, setContentFile] = useState('');
  const [tempSyllabus, setTempSyllabus] = useState('');

  // Course handlers
  const handleAddCourse = () => {
    if (!selectedFaculty || !courseForm.name.trim()) {
      alert('Please fill in all required fields');
      return;
    }
    
    const newCourse = {
      id: Date.now(),
      ...courseForm,
      subjects: []
    };
    
    setData(prev => ({
      ...prev,
      faculties: prev.faculties.map(f =>
        f.id === selectedFaculty.id
          ? { ...f, courses: [...f.courses, newCourse] }
          : f
      )
    }));
    
    setShowCourseModal(false);
    setCourseForm({ name: '', duration: '', intake: '' });
    alert('Course added successfully!');
  };

  const handleEditCourse = (course) => {
    setEditingCourse(course);
    setCourseForm({ 
      name: course.name, 
      duration: course.duration, 
      intake: course.intake 
    });
    setShowCourseModal(true);
  };

  const handleUpdateCourse = () => {
    if (!courseForm.name.trim()) {
      alert('Please fill in all required fields');
      return;
    }

    setData(prev => ({
      ...prev,
      faculties: prev.faculties.map(f =>
        f.id === selectedFaculty.id
          ? {
              ...f,
              courses: f.courses.map(c =>
                c.id === editingCourse.id ? { ...c, ...courseForm } : c
              )
            }
          : f
      )
    }));
    
    // Update selectedCourse if it's the one being edited
    if (selectedCourse && selectedCourse.id === editingCourse.id) {
      setSelectedCourse({ ...selectedCourse, ...courseForm });
    }
    
    setShowCourseModal(false);
    setEditingCourse(null);
    setCourseForm({ name: '', duration: '', intake: '' });
    alert('Course updated successfully!');
  };

  const handleDeleteCourse = (courseId) => {
    if (window.confirm('Are you sure you want to delete this course? This will also delete all subjects in this course.')) {
      setData(prev => ({
        ...prev,
        faculties: prev.faculties.map(f =>
          f.id === selectedFaculty.id
            ? { ...f, courses: f.courses.filter(c => c.id !== courseId) }
            : f
        )
      }));
      
      // Clear selected course if it's the one being deleted
      if (selectedCourse && selectedCourse.id === courseId) {
        setSelectedCourse(null);
        setSelectedSubject(null);
      }
      
      alert('Course deleted successfully!');
    }
  };

  // Subject handlers
  const handleAddSubject = () => {
    if (!selectedCourse || !subjectForm.name.trim() || !subjectForm.code.trim()) {
      alert('Please fill in all required fields');
      return;
    }
    
    const newSubject = {
      id: Date.now(),
      ...subjectForm,
      credits: parseInt(subjectForm.credits) || 0,
      content: []
    };
    
    setData(prev => ({
      ...prev,
      faculties: prev.faculties.map(f =>
        f.id === selectedFaculty.id
          ? {
              ...f,
              courses: f.courses.map(c =>
                c.id === selectedCourse.id
                  ? { ...c, subjects: [...c.subjects, newSubject] }
                  : c
              )
            }
          : f
      )
    }));
    
    // Update selectedCourse to reflect the new subject
    setSelectedCourse(prev => ({
      ...prev,
      subjects: [...prev.subjects, newSubject]
    }));
    
    setShowSubjectModal(false);
    setSubjectForm({ name: '', code: '', credits: '', syllabus: '' });
    alert('Subject added successfully!');
  };

  const handleEditSubject = (subject) => {
    setEditingSubject(subject);
    setSubjectForm({
      name: subject.name,
      code: subject.code,
      credits: subject.credits.toString(),
      syllabus: subject.syllabus
    });
    setShowSubjectModal(true);
  };

  const handleUpdateSubject = () => {
    if (!subjectForm.name.trim() || !subjectForm.code.trim()) {
      alert('Please fill in all required fields');
      return;
    }

    const updatedSubject = {
      ...editingSubject,
      ...subjectForm,
      credits: parseInt(subjectForm.credits) || 0
    };

    setData(prev => ({
      ...prev,
      faculties: prev.faculties.map(f =>
        f.id === selectedFaculty.id
          ? {
              ...f,
              courses: f.courses.map(c =>
                c.id === selectedCourse.id
                  ? {
                      ...c,
                      subjects: c.subjects.map(s =>
                        s.id === editingSubject.id ? updatedSubject : s
                      )
                    }
                  : c
              )
            }
          : f
      )
    }));
    
    // Update selectedCourse and selectedSubject
    setSelectedCourse(prev => ({
      ...prev,
      subjects: prev.subjects.map(s =>
        s.id === editingSubject.id ? updatedSubject : s
      )
    }));
    
    if (selectedSubject && selectedSubject.id === editingSubject.id) {
      setSelectedSubject(updatedSubject);
    }
    
    setShowSubjectModal(false);
    setEditingSubject(null);
    setSubjectForm({ name: '', code: '', credits: '', syllabus: '' });
    alert('Subject updated successfully!');
=======
  const [showSyllabusModal, setShowSyllabusModal] = useState(false);
  const [showAddCourseModal, setShowAddCourseModal] = useState(false);
  const [showEditCourseModal, setShowEditCourseModal] = useState(false);
  const [showEditSubjectModal, setShowEditSubjectModal] = useState(false);
  const [showAddSubjectModal, setShowAddSubjectModal] = useState(false);
  const [showAddFileModal, setShowAddFileModal] = useState(false);
  
  // Form states
  const [editingSyllabus, setEditingSyllabus] = useState({});
  const [editingCourse, setEditingCourse] = useState(null);
  const [editingSubject, setEditingSubject] = useState(null);
  const [newCourse, setNewCourse] = useState({ name: '', duration: '', intake: '' });
  const [newSubject, setNewSubject] = useState({ name: '', code: '', credits: '' });
  const [newFileName, setNewFileName] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);
  const [isDragOver, setIsDragOver] = useState(false);

  // Handler functions
  const handleDeleteCourse = (courseId) => {
    if (window.confirm('Are you sure you want to delete this course?')) {
      const updatedData = { ...data };
      const faculty = updatedData.faculties.find(f => f.id === selectedFaculty.id);
      faculty.courses = faculty.courses.filter(c => c.id !== courseId);
      
      setData(updatedData);
      if (selectedCourse?.id === courseId) {
        setSelectedCourse(null);
        setSelectedSubject(null);
      }
    }
  };

  const handleEditCourse = () => {
    if (!editingCourse || !newCourse.name) return;
    
    const updatedData = { ...data };
    const faculty = updatedData.faculties.find(f => f.id === selectedFaculty.id);
    const course = faculty.courses.find(c => c.id === editingCourse.id);
    
    course.name = newCourse.name;
    course.duration = newCourse.duration;
    course.intake = newCourse.intake;
    
    setData(updatedData);
    if (selectedCourse?.id === editingCourse.id) {
      setSelectedCourse(course);
    }
    setNewCourse({ name: '', duration: '', intake: '' });
    setEditingCourse(null);
    setShowEditCourseModal(false);
>>>>>>> c58690afdcbaf86d63e4e395000c9e3f86743a8d
  };

  const handleDeleteSubject = (subjectId) => {
    if (window.confirm('Are you sure you want to delete this subject?')) {
<<<<<<< HEAD
      setData(prev => ({
        ...prev,
        faculties: prev.faculties.map(f =>
          f.id === selectedFaculty.id
            ? {
                ...f,
                courses: f.courses.map(c =>
                  c.id === selectedCourse.id
                    ? { ...c, subjects: c.subjects.filter(s => s.id !== subjectId) }
                    : c
                )
              }
            : f
        )
      }));
      
      // Update selectedCourse
      setSelectedCourse(prev => ({
        ...prev,
        subjects: prev.subjects.filter(s => s.id !== subjectId)
      }));
      
      // Clear selectedSubject if it's the one being deleted
      if (selectedSubject && selectedSubject.id === subjectId) {
        setSelectedSubject(null);
      }
      
      alert('Subject deleted successfully!');
    }
  };

  // Content handlers
  const handleUploadContent = () => {
    if (!contentFile.trim() || !selectedSubject) {
      alert('Please enter a file name');
      return;
    }
    
    setData(prev => ({
      ...prev,
      faculties: prev.faculties.map(f =>
        f.id === selectedFaculty.id
          ? {
              ...f,
              courses: f.courses.map(c =>
                c.id === selectedCourse.id
                  ? {
                      ...c,
                      subjects: c.subjects.map(s =>
                        s.id === selectedSubject.id
                          ? { ...s, content: [...s.content, contentFile] }
                          : s
                      )
                    }
                  : c
              )
            }
          : f
      )
    }));
    
    // Update selectedSubject
    setSelectedSubject(prev => ({
      ...prev,
      content: [...prev.content, contentFile]
    }));
    
    // Update selectedCourse
    setSelectedCourse(prev => ({
      ...prev,
      subjects: prev.subjects.map(s =>
        s.id === selectedSubject.id
          ? { ...s, content: [...s.content, contentFile] }
          : s
      )
    }));
    
    setShowContentModal(false);
    setContentFile('');
    alert('Content uploaded successfully!');
  };

  // File action handlers
  const handleViewFile = (filename) => {
    setViewingFile(filename);
    setShowViewModal(true);
  };

  const handleDownloadFile = (filename) => {
    // Simulate file download
    alert(`Downloading: ${filename}\n\nIn a real application, this would trigger a file download.`);
  };

  const handleDeleteFile = (filename) => {
    if (window.confirm(`Are you sure you want to delete "${filename}"?`)) {
      setData(prev => ({
        ...prev,
        faculties: prev.faculties.map(f =>
          f.id === selectedFaculty.id
            ? {
                ...f,
                courses: f.courses.map(c =>
                  c.id === selectedCourse.id
                    ? {
                        ...c,
                        subjects: c.subjects.map(s =>
                          s.id === selectedSubject.id
                            ? { ...s, content: s.content.filter(file => file !== filename) }
                            : s
                        )
                      }
                    : c
                )
              }
            : f
        )
      }));
      
      // Update selectedSubject
      setSelectedSubject(prev => ({
        ...prev,
        content: prev.content.filter(file => file !== filename)
      }));
      
      // Update selectedCourse
      setSelectedCourse(prev => ({
        ...prev,
        subjects: prev.subjects.map(s =>
          s.id === selectedSubject.id
            ? { ...s, content: s.content.filter(file => file !== filename) }
            : s
        )
      }));
      
      alert('File deleted successfully!');
    }
  };

  // Syllabus handlers
  const handleOpenSyllabus = () => {
    setTempSyllabus(selectedSubject.syllabus);
=======
      const updatedData = { ...data };
      const faculty = updatedData.faculties.find(f => f.id === selectedFaculty.id);
      const course = faculty.courses.find(c => c.id === selectedCourse.id);
      course.subjects = course.subjects.filter(s => s.id !== subjectId);
      
      setData(updatedData);
      if (selectedSubject?.id === subjectId) {
        setSelectedSubject(null);
      }
    }
  };

  const handleEditSubject = () => {
    if (!editingSubject || !newSubject.name) return;
    
    const updatedData = { ...data };
    const faculty = updatedData.faculties.find(f => f.id === selectedFaculty.id);
    const course = faculty.courses.find(c => c.id === selectedCourse.id);
    const subject = course.subjects.find(s => s.id === editingSubject.id);
    
    subject.name = newSubject.name;
    subject.code = newSubject.code;
    subject.credits = parseInt(newSubject.credits);
    
    setData(updatedData);
    if (selectedSubject?.id === editingSubject.id) {
      setSelectedSubject(subject);
    }
    setNewSubject({ name: '', code: '', credits: '' });
    setEditingSubject(null);
    setShowEditSubjectModal(false);
  };

  const handleEditSyllabus = () => {
    setEditingSyllabus({ ...selectedSubject.syllabus });
>>>>>>> c58690afdcbaf86d63e4e395000c9e3f86743a8d
    setShowSyllabusModal(true);
  };

  const handleSaveSyllabus = () => {
<<<<<<< HEAD
    setData(prev => ({
      ...prev,
      faculties: prev.faculties.map(f =>
        f.id === selectedFaculty.id
          ? {
              ...f,
              courses: f.courses.map(c =>
                c.id === selectedCourse.id
                  ? {
                      ...c,
                      subjects: c.subjects.map(s =>
                        s.id === selectedSubject.id
                          ? { ...s, syllabus: tempSyllabus }
                          : s
                      )
                    }
                  : c
              )
            }
          : f
      )
    }));
    
    // Update selectedSubject
    setSelectedSubject(prev => ({
      ...prev,
      syllabus: tempSyllabus
    }));
    
    // Update selectedCourse
    setSelectedCourse(prev => ({
      ...prev,
      subjects: prev.subjects.map(s =>
        s.id === selectedSubject.id
          ? { ...s, syllabus: tempSyllabus }
          : s
      )
    }));
    
    setShowSyllabusModal(false);
    alert('Syllabus updated successfully!');
  };

  return (
    <div className="academic-content-page">
      <div className="academic-dashboard-container">
        <UniSidebar activePage="academic-content" onExpandChange={setIsSidebarExpanded} />
        <UniHeader sidebarExpanded={isSidebarExpanded} />

        <main className={`academic-main-content ${isSidebarExpanded ? 'sidebar-expanded' : 'sidebar-collapsed'}`}>
          
          {/* Overview Section */}
          <section className="academic-overview">
            <div className="overview-header">
              <h1>Academic Content Management</h1>
              <p>Manage faculties, courses, subjects, and academic content across the university</p>
            </div>
            <div className="overview-stats">
              <div className="stat-card">
                <h3>{data.faculties.length}</h3>
                <p>Faculties</p>
              </div>
              <div className="stat-card">
                <h3>{data.faculties.reduce((total, f) => total + f.courses.length, 0)}</h3>
                <p>Total Courses</p>
              </div>
              <div className="stat-card">
                <h3>{data.faculties.reduce((total, f) => total + f.courses.reduce((ct, c) => ct + c.subjects.length, 0), 0)}</h3>
                <p>Total Subjects</p>
              </div>
            </div>
          </section>

          {/* Faculties Section */}
          <section className="faculties-section">
            <h2>University Faculties</h2>
            <div className="faculties-grid">
              {data.faculties.map(faculty => (
                <div 
                  key={faculty.id} 
                  className={`faculty-card ${selectedFaculty?.id === faculty.id ? 'selected' : ''}`}
                  onClick={() => {
                    setSelectedFaculty(faculty);
                    setSelectedCourse(null);
                    setSelectedSubject(null);
                  }}
                >
                  <h3>{faculty.name}</h3>
                  <p>{faculty.description}</p>
                  <div className="faculty-meta">
                    <span>Dean: {faculty.dean}</span>
                    <span>Est. {faculty.established}</span>
                    <span>{faculty.courses.length} Courses</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Courses Section */}
          {selectedFaculty && (
            <section className="courses-section">
              <div className="section-header">
                <h2>Courses in {selectedFaculty.name}</h2>
                <button 
                  className="btn btn-primary"
                  onClick={() => { 
                    setShowCourseModal(true); 
                    setEditingCourse(null); 
                    setCourseForm({ name: '', duration: '', intake: '' }); 
                  }}
                >
                  + Add Course
                </button>
              </div>
              <div className="courses-list">
                {selectedFaculty.courses.map(course => (
                  <div 
                    key={course.id}
                    className={`course-card ${selectedCourse?.id === course.id ? 'selected' : ''}`}
                    onClick={() => {
                      setSelectedCourse(course);
                      setSelectedSubject(null);
                    }}
                  >
                    <div className="course-info">
                      <h4>{course.name}</h4>
                      <div className="course-meta">
                        <span>Duration: {course.duration}</span>
                        <span>Intake: {course.intake}</span>
                        <span>{course.subjects.length} Subjects</span>
                      </div>
                    </div>
                    <div className="course-actions">
                      <button 
                        onClick={(e) => { 
                          e.stopPropagation(); 
                          handleEditCourse(course); 
                        }}
                        title="Edit Course"
                      >
                        ✏️
                      </button>
                      <button 
                        onClick={(e) => { 
                          e.stopPropagation(); 
                          handleDeleteCourse(course.id); 
                        }}
                        title="Delete Course"
                      >
                        🗑️
                      </button>
                    </div>
                  </div>
                ))}
                {selectedFaculty.courses.length === 0 && (
                  <div className="empty-content">No courses available. Add a course to get started.</div>
                )}
              </div>
            </section>
          )}

          {/* Subjects Section */}
          {selectedCourse && (
            <section className="subjects-section">
              <div className="section-header">
                <h2>Subjects in {selectedCourse.name}</h2>
                <button 
                  className="btn btn-primary"
                  onClick={() => { 
                    setShowSubjectModal(true); 
                    setEditingSubject(null); 
                    setSubjectForm({ name: '', code: '', credits: '', syllabus: '' }); 
                  }}
                >
                  + Add Subject
                </button>
              </div>
              <div className="subjects-list">
                {selectedCourse.subjects.map(subject => (
                  <div 
                    key={subject.id}
                    className={`subject-card ${selectedSubject?.id === subject.id ? 'selected' : ''}`}
                    onClick={() => setSelectedSubject(subject)}
                  >
                    <div className="subject-info">
                      <h4>{subject.name} ({subject.code})</h4>
                      <p className="syllabus-preview">{subject.syllabus}</p>
                      <div className="subject-meta">
                        <span>Credits: {subject.credits}</span>
                        <span>{subject.content.length} Content Files</span>
                      </div>
                    </div>
                    <div className="subject-actions">
                      <button 
                        onClick={(e) => { 
                          e.stopPropagation(); 
                          handleOpenSyllabus(); 
                        }}
                        title="Edit Syllabus"
                      >
                        📝 Syllabus
                      </button>
                      <button 
                        onClick={(e) => { 
                          e.stopPropagation(); 
                          setShowContentModal(true); 
                        }}
                        title="Upload Content"
                      >
                        📁 Content
                      </button>
                      <button 
                        onClick={(e) => { 
                          e.stopPropagation(); 
                          handleEditSubject(subject); 
                        }}
                        title="Edit Subject"
                      >
                        ✏️
                      </button>
                      <button 
                        onClick={(e) => { 
                          e.stopPropagation(); 
                          handleDeleteSubject(subject.id); 
                        }}
                        title="Delete Subject"
                      >
                        🗑️
                      </button>
                    </div>
                  </div>
                ))}
                {selectedCourse.subjects.length === 0 && (
                  <div className="empty-content">No subjects available. Add a subject to get started.</div>
                )}
              </div>
            </section>
          )}

          {/* Content Files Section */}
          {selectedSubject && (
            <section className="content-section">
              <div className="section-header">
                <h2>Academic Content for {selectedSubject.name}</h2>
                <button 
                  className="btn btn-primary" 
                  onClick={() => setShowContentModal(true)}
                >
                  + Upload Content
                </button>
              </div>
              <div className="content-list">
                {selectedSubject.content.map((file, index) => (
                  <div key={index} className="content-file">
                    <span>📄 {file}</span>
                    <div className="file-actions">
                      <button 
                        onClick={() => handleViewFile(file)}
                        title="View File"
                      >
                        👁️ View
                      </button>
                      <button 
                        onClick={() => handleDownloadFile(file)}
                        title="Download File"
                      >
                        ⬇️ Download
                      </button>
                      <button 
                        onClick={() => handleDeleteFile(file)}
                        title="Delete File"
                      >
                        🗑️ Delete
                      </button>
                    </div>
                  </div>
                ))}
                {selectedSubject.content.length === 0 && (
                  <div className="empty-content">No content uploaded yet. Upload files to share with students.</div>
                )}
              </div>
            </section>
          )}

          <Footer
            title="Academic Excellence"
            subtitle="Empowering education through comprehensive academic content management"
            theme="dark"
            sidebarExpanded={isSidebarExpanded}
          />
        </main>
      </div>

      {/* Course Modal */}
      {showCourseModal && (
        <div className="modal-overlay" onClick={() => setShowCourseModal(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <h3>{editingCourse ? 'Edit Course' : 'Add New Course'}</h3>
            <form onSubmit={e => { 
              e.preventDefault(); 
              editingCourse ? handleUpdateCourse() : handleAddCourse(); 
            }}>
              <input
                type="text"
                placeholder="Course Name *"
                value={courseForm.name}
                onChange={e => setCourseForm({ ...courseForm, name: e.target.value })}
                required
              />
              <input
                type="text"
                placeholder="Duration (e.g., 4 years) *"
                value={courseForm.duration}
                onChange={e => setCourseForm({ ...courseForm, duration: e.target.value })}
                required
              />
              <input
                type="text"
                placeholder="Annual Intake (e.g., 100 students/year) *"
                value={courseForm.intake}
                onChange={e => setCourseForm({ ...courseForm, intake: e.target.value })}
                required
              />
              <div className="modal-actions">
                <button type="button" onClick={() => setShowCourseModal(false)}>Cancel</button>
                <button type="submit" className="btn-primary">
                  {editingCourse ? 'Update Course' : 'Add Course'}
                </button>
              </div>
            </form>
=======
    const updatedData = { ...data };
    const faculty = updatedData.faculties.find(f => f.id === selectedFaculty.id);
    const course = faculty.courses.find(c => c.id === selectedCourse.id);
    const subject = course.subjects.find(s => s.id === selectedSubject.id);
    subject.syllabus = { ...editingSyllabus };
    
    setData(updatedData);
    setSelectedSubject(subject);
    setShowSyllabusModal(false);
  };

  const handleAddCourse = () => {
    if (!selectedFaculty || !newCourse.name) return;
    
    const updatedData = { ...data };
    const faculty = updatedData.faculties.find(f => f.id === selectedFaculty.id);
    const newId = Math.max(...faculty.courses.map(c => c.id)) + 1;
    
    faculty.courses.push({
      id: newId,
      name: newCourse.name,
      duration: newCourse.duration,
      intake: newCourse.intake,
      subjects: []
    });
    
    setData(updatedData);
    setNewCourse({ name: '', duration: '', intake: '' });
    setShowAddCourseModal(false);
  };

  const handleAddSubject = () => {
    if (!selectedCourse || !newSubject.name) return;
    
    const updatedData = { ...data };
    const faculty = updatedData.faculties.find(f => f.id === selectedFaculty.id);
    const course = faculty.courses.find(c => c.id === selectedCourse.id);
    const newId = Math.max(...course.subjects.map(s => s.id), 0) + 1;
    
    course.subjects.push({
      id: newId,
      name: newSubject.name,
      code: newSubject.code,
      credits: parseInt(newSubject.credits),
      syllabus: {
        overview: '',
        objectives: [],
        topics: [],
        assessment: [],
        references: []
      },
      content: []
    });
    
    setData(updatedData);
    setNewSubject({ name: '', code: '', credits: '' });
    setShowAddSubjectModal(false);
  };

  const handleAddFile = () => {
    if (!selectedSubject || (!selectedFile && !newFileName)) return;
    
    const fileName = selectedFile ? selectedFile.name : newFileName;
    
    const updatedData = { ...data };
    const faculty = updatedData.faculties.find(f => f.id === selectedFaculty.id);
    const course = faculty.courses.find(c => c.id === selectedCourse.id);
    const subject = course.subjects.find(s => s.id === selectedSubject.id);
    
    if (!subject.content.includes(fileName)) {
      subject.content.push(fileName);
    }
    
    // If it's a real file, you could upload it to a server here
    if (selectedFile) {
      // For now, we'll just add the filename to the list
      // In a real application, you would upload the file to your server
      console.log('File to upload:', selectedFile);
    }
    
    setData(updatedData);
    setSelectedSubject(subject);
    setNewFileName('');
    setSelectedFile(null);
    setShowAddFileModal(false);
  };

  const handleFileSelect = (file) => {
    setSelectedFile(file);
    setNewFileName(file.name);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragOver(false);
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      handleFileSelect(files[0]);
    }
  };

  const handleDownloadFile = (filename) => {
    const fileUrl = `/files/${filename}`;
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: '#f8fafc',
      fontFamily: "'Inter', sans-serif"
    }}>
      <UniversitySidebar 
        isOpen={isSidebarOpen}
        setIsOpen={setIsSidebarOpen}
      />

      <UniversityNavbar
        onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)}
        sidebarExpanded={isSidebarOpen}
      />

      <main style={{
        flex: 1,
        marginLeft: isSidebarOpen ? '288px' : '0',
        minHeight: '100vh',
        transition: 'margin-left 0.3s ease',
        background: '#f8fafc',
        paddingTop: '90px'
      }}>
        
        {/* Overview Section */}
        <section style={{
          background: 'white',
          margin: '2rem',
          borderRadius: '12px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
          padding: '2rem',
          marginBottom: '2rem'
        }}>
          <div style={{ marginBottom: '2rem' }}>
            <h1 style={{
              fontSize: '2rem',
              fontWeight: '700',
              color: '#1e293b',
              marginBottom: '0.5rem'
            }}>Academic Content Management</h1>
            <p style={{
              color: '#64748b',
              fontSize: '1.1rem',
              marginBottom: '0'
            }}>Manage faculties, courses, subjects, and academic content across the university</p>
          </div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1.5rem'
          }}>
            <div style={{
              background: '#f8fafc',
              padding: '1.5rem',
              borderRadius: '8px',
              textAlign: 'center',
              border: '1px solid #e2e8f0'
            }}>
              <h3 style={{
                fontSize: '2rem',
                fontWeight: '700',
                color: '#6366f1',
                marginBottom: '0.5rem'
              }}>{data.faculties.length}</h3>
              <p style={{
                color: '#64748b',
                fontWeight: '500',
                margin: '0'
              }}>Faculties</p>
            </div>
            <div style={{
              background: '#f8fafc',
              padding: '1.5rem',
              borderRadius: '8px',
              textAlign: 'center',
              border: '1px solid #e2e8f0'
            }}>
              <h3 style={{
                fontSize: '2rem',
                fontWeight: '700',
                color: '#6366f1',
                marginBottom: '0.5rem'
              }}>{data.faculties.reduce((total, f) => total + f.courses.length, 0)}</h3>
              <p style={{
                color: '#64748b',
                fontWeight: '500',
                margin: '0'
              }}>Total Courses</p>
            </div>
            <div style={{
              background: '#f8fafc',
              padding: '1.5rem',
              borderRadius: '8px',
              textAlign: 'center',
              border: '1px solid #e2e8f0'
            }}>
              <h3 style={{
                fontSize: '2rem',
                fontWeight: '700',
                color: '#6366f1',
                marginBottom: '0.5rem'
              }}>{data.faculties.reduce((total, f) => total + f.courses.reduce((ct, c) => ct + c.subjects.length, 0), 0)}</h3>
              <p style={{
                color: '#64748b',
                fontWeight: '500',
                margin: '0'
              }}>Total Subjects</p>
            </div>
          </div>
        </section>

        {/* Faculties Section */}
        <section style={{
          background: 'white',
          margin: '2rem',
          borderRadius: '12px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
          padding: '2rem',
          marginBottom: '2rem'
        }}>
          <h2 style={{
            fontSize: '1.5rem',
            fontWeight: '600',
            color: '#1e293b',
            marginBottom: '1.5rem'
          }}>University Faculties</h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '1.5rem'
          }}>
            {data.faculties.map(faculty => (
              <div 
                key={faculty.id}
                style={{
                  background: selectedFaculty?.id === faculty.id ? '#eef2ff' : '#f9fafb',
                  border: `2px solid ${selectedFaculty?.id === faculty.id ? '#6366f1' : '#e5e7eb'}`,
                  borderRadius: '8px',
                  padding: '1.5rem',
                  cursor: 'pointer',
                  transition: 'all 0.2s'
                }}
                onClick={() => {
                  setSelectedFaculty(faculty);
                  setSelectedCourse(null);
                  setSelectedSubject(null);
                }}
              >
                <h3 style={{
                  fontSize: '1.25rem',
                  fontWeight: '600',
                  color: '#1e293b',
                  marginBottom: '0.5rem'
                }}>{faculty.name}</h3>
                <p style={{
                  color: '#64748b',
                  marginBottom: '1rem',
                  lineHeight: '1.6'
                }}>{faculty.description}</p>
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.25rem',
                  fontSize: '0.875rem',
                  color: '#6b7280'
                }}>
                  <span>Dean: {faculty.dean}</span>
                  <span>Est. {faculty.established}</span>
                  <span>{faculty.courses.length} Courses</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Courses Section */}
        {selectedFaculty && (
          <section style={{
            background: 'white',
            margin: '2rem',
            borderRadius: '12px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
            padding: '2rem',
            marginBottom: '2rem'
          }}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '1.5rem'
            }}>
              <h2 style={{
                fontSize: '1.5rem',
                fontWeight: '600',
                color: '#1e293b'
              }}>Courses in {selectedFaculty.name}</h2>
              <button
                onClick={() => setShowAddCourseModal(true)}
                style={{
                  background: 'white',
                  border: '2px solid #2563eb',
                  borderRadius: '8px',
                  padding: '0.75rem 1.5rem',
                  color: '#2563eb',
                  fontWeight: '600',
                  cursor: 'pointer',
                  fontSize: '0.875rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  transition: 'all 0.2s',
                  minWidth: '140px'
                }}
                onMouseOver={(e) => {
                  e.target.style.background = '#eff6ff';
                }}
                onMouseOut={(e) => {
                  e.target.style.background = 'white';
                }}
              >
                ➕ Add Course
              </button>
            </div>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem'
            }}>
              {selectedFaculty.courses.map(course => (
                <div 
                  key={course.id}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    background: selectedCourse?.id === course.id ? '#eef2ff' : '#f9fafb',
                    border: `2px solid ${selectedCourse?.id === course.id ? '#6366f1' : '#e5e7eb'}`,
                    borderRadius: '8px',
                    padding: '1.5rem',
                    cursor: 'pointer',
                    transition: 'all 0.2s'
                  }}
                  onClick={() => {
                    setSelectedCourse(course);
                    setSelectedSubject(null);
                  }}
                >
                  <div>
                    <h4 style={{
                      fontSize: '1.1rem',
                      fontWeight: '600',
                      color: '#1e293b',
                      marginBottom: '0.5rem'
                    }}>{course.name}</h4>
                    <div style={{
                      display: 'flex',
                      gap: '1rem',
                      fontSize: '0.875rem',
                      color: '#6b7280'
                    }}>
                      <span>Duration: {course.duration}</span>
                      <span>Intake: {course.intake}</span>
                      <span>{course.subjects.length} Subjects</span>
                    </div>
                  </div>
                  <div style={{
                    display: 'flex',
                    gap: '0.5rem',
                    alignItems: 'center'
                  }}>
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        setNewCourse({
                          name: course.name,
                          duration: course.duration,
                          intake: course.intake
                        });
                        setEditingCourse(course);
                        setShowEditCourseModal(true);
                      }}
                      style={{
                        background: 'white',
                        border: '1px solid #e5e7eb',
                        borderRadius: '6px',
                        padding: '0.5rem',
                        color: '#374151',
                        cursor: 'pointer',
                        fontSize: '0.875rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '32px',
                        height: '32px',
                        transition: 'all 0.2s',
                        boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)'
                      }}
                      onMouseOver={(e) => {
                        e.target.style.background = '#f9fafb';
                      }}
                      onMouseOut={(e) => {
                        e.target.style.background = 'white';
                      }}
                    >
                      ✏️
                    </button>
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDeleteCourse(course.id);
                      }}
                      style={{
                        background: 'white',
                        border: '1px solid #e5e7eb',
                        borderRadius: '6px',
                        padding: '0.5rem',
                        color: '#ef4444',
                        cursor: 'pointer',
                        fontSize: '0.875rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '32px',
                        height: '32px',
                        transition: 'all 0.2s',
                        boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)'
                      }}
                      onMouseOver={(e) => {
                        e.target.style.background = '#fef2f2';
                      }}
                      onMouseOut={(e) => {
                        e.target.style.background = 'white';
                      }}
                    >
                      🗑️
                    </button>
                  </div>
                </div>
              ))}
              {selectedFaculty.courses.length === 0 && (
                <div style={{
                  textAlign: 'center',
                  color: '#6b7280',
                  padding: '3rem 2rem',
                  fontStyle: 'italic',
                  background: '#f9fafb',
                  border: '2px dashed #d1d5db',
                  borderRadius: '8px'
                }}>No courses available.</div>
              )}
            </div>
          </section>
        )}

        {/* Subjects Section */}
        {selectedCourse && (
          <section style={{
            background: 'white',
            margin: '2rem',
            borderRadius: '12px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
            padding: '2rem',
            marginBottom: '2rem'
          }}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '1.5rem'
            }}>
              <h2 style={{
                fontSize: '1.5rem',
                fontWeight: '600',
                color: '#1e293b'
              }}>Subjects in {selectedCourse.name}</h2>
              <button
                onClick={() => setShowAddSubjectModal(true)}
                style={{
                  background: 'white',
                  border: '2px solid #2563eb',
                  borderRadius: '8px',
                  padding: '0.75rem 1.5rem',
                  color: '#2563eb',
                  fontWeight: '600',
                  cursor: 'pointer',
                  fontSize: '0.875rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  transition: 'all 0.2s',
                  minWidth: '140px'
                }}
                onMouseOver={(e) => {
                  e.target.style.background = '#eff6ff';
                }}
                onMouseOut={(e) => {
                  e.target.style.background = 'white';
                }}
              >
                ➕ Add Subject
              </button>
            </div>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem'
            }}>
              {selectedCourse.subjects.map(subject => (
                <div 
                  key={subject.id}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    background: selectedSubject?.id === subject.id ? '#eef2ff' : '#f9fafb',
                    border: `2px solid ${selectedSubject?.id === subject.id ? '#6366f1' : '#e5e7eb'}`,
                    borderRadius: '8px',
                    padding: '1.5rem',
                    cursor: 'pointer',
                    transition: 'all 0.2s'
                  }}
                  onClick={() => setSelectedSubject(subject)}
                >
                  <div>
                    <h4 style={{
                      fontSize: '1.1rem',
                      fontWeight: '600',
                      color: '#1e293b',
                      marginBottom: '0.5rem'
                    }}>{subject.name} ({subject.code})</h4>
                    <p style={{
                      color: '#64748b',
                      margin: '0.5rem 0',
                      fontSize: '0.9rem'
                    }}>{subject.syllabus.overview}</p>
                    <div style={{
                      display: 'flex',
                      gap: '1rem',
                      fontSize: '0.875rem',
                      color: '#6b7280'
                    }}>
                      <span>Credits: {subject.credits}</span>
                      <span>{subject.content.length} Content Files</span>
                    </div>
                  </div>
                  <div style={{
                    display: 'flex',
                    gap: '0.5rem',
                    alignItems: 'center'
                  }}>
                    <button 
                      onClick={(e) => { 
                        e.stopPropagation(); 
                        handleEditSyllabus(); 
                      }}
                      style={{
                        background: 'white',
                        border: '1px solid #e5e7eb',
                        borderRadius: '6px',
                        padding: '0.5rem 1rem',
                        color: '#374151',
                        fontWeight: '500',
                        cursor: 'pointer',
                        fontSize: '0.875rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '0.5rem',
                        transition: 'all 0.2s',
                        minWidth: '140px',
                        boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)'
                      }}
                      onMouseOver={(e) => {
                        e.target.style.background = '#f9fafb';
                      }}
                      onMouseOut={(e) => {
                        e.target.style.background = 'white';
                      }}
                    >
                      📝 View Syllabus
                    </button>
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        setNewSubject({
                          name: subject.name,
                          code: subject.code,
                          credits: subject.credits.toString()
                        });
                        setEditingSubject(subject);
                        setShowEditSubjectModal(true);
                      }}
                      style={{
                        background: 'white',
                        border: '1px solid #e5e7eb',
                        borderRadius: '6px',
                        padding: '0.5rem',
                        color: '#374151',
                        cursor: 'pointer',
                        fontSize: '0.875rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '32px',
                        height: '32px',
                        transition: 'all 0.2s',
                        boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)'
                      }}
                      onMouseOver={(e) => {
                        e.target.style.background = '#f9fafb';
                      }}
                      onMouseOut={(e) => {
                        e.target.style.background = 'white';
                      }}
                    >
                      ✏️
                    </button>
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDeleteSubject(subject.id);
                      }}
                      style={{
                        background: 'white',
                        border: '1px solid #e5e7eb',
                        borderRadius: '6px',
                        padding: '0.5rem',
                        color: '#ef4444',
                        cursor: 'pointer',
                        fontSize: '0.875rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '32px',
                        height: '32px',
                        transition: 'all 0.2s',
                        boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)'
                      }}
                      onMouseOver={(e) => {
                        e.target.style.background = '#fef2f2';
                      }}
                      onMouseOut={(e) => {
                        e.target.style.background = 'white';
                      }}
                    >
                      🗑️
                    </button>
                  </div>
                </div>
              ))}
              {selectedCourse.subjects.length === 0 && (
                <div style={{
                  textAlign: 'center',
                  color: '#6b7280',
                  padding: '3rem 2rem',
                  fontStyle: 'italic',
                  background: '#f9fafb',
                  border: '2px dashed #d1d5db',
                  borderRadius: '8px'
                }}>No subjects available.</div>
              )}
            </div>
          </section>
        )}

        {/* Content Files Section */}
        {selectedSubject && (
          <section style={{
            background: 'white',
            margin: '2rem',
            borderRadius: '12px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
            padding: '2rem',
            marginBottom: '2rem'
          }}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '1.5rem'
            }}>
              <h2 style={{
                fontSize: '1.5rem',
                fontWeight: '600',
                color: '#1e293b'
              }}>Academic Content for {selectedSubject.name}</h2>
              <button
                onClick={() => setShowAddFileModal(true)}
                style={{
                  background: 'white',
                  border: '2px solid #2563eb',
                  borderRadius: '8px',
                  padding: '0.75rem 1.5rem',
                  color: '#2563eb',
                  fontWeight: '600',
                  cursor: 'pointer',
                  fontSize: '0.875rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  transition: 'all 0.2s',
                  minWidth: '140px'
                }}
                onMouseOver={(e) => {
                  e.target.style.background = '#eff6ff';
                }}
                onMouseOut={(e) => {
                  e.target.style.background = 'white';
                }}
              >
                ➕ Add File
              </button>
            </div>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem'
            }}>
              {selectedSubject.content.map((file, index) => (
                <div key={index} style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  background: '#f9fafb',
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px',
                  padding: '1rem'
                }}>
                  <span>📄 {file}</span>
                  <div style={{
                    display: 'flex',
                    gap: '0.5rem'
                  }}>
                    <button 
                      onClick={() => handleDownloadFile(file)}
                      style={{
                        background: 'white',
                        border: '1px solid #e5e7eb',
                        borderRadius: '6px',
                        padding: '0.5rem 0.75rem',
                        color: '#374151',
                        fontWeight: '500',
                        cursor: 'pointer',
                        fontSize: '0.8rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '0.25rem',
                        transition: 'all 0.2s',
                        minWidth: '100px',
                        boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)'
                      }}
                      onMouseOver={(e) => {
                        e.target.style.background = '#f9fafb';
                      }}
                      onMouseOut={(e) => {
                        e.target.style.background = 'white';
                      }}
                    >
                      ⬇️ Download
                    </button>
                  </div>
                </div>
              ))}
              {selectedSubject.content.length === 0 && (
                <div style={{
                  textAlign: 'center',
                  color: '#6b7280',
                  padding: '3rem 2rem',
                  fontStyle: 'italic',
                  background: '#f9fafb',
                  border: '2px dashed #d1d5db',
                  borderRadius: '8px'
                }}>No content available.</div>
              )}
            </div>
          </section>
        )}

        <Footer
          title="Academic Excellence"
          subtitle="Empowering education through comprehensive academic content"
          theme="dark"
          sidebarExpanded={isSidebarOpen}
        />
      </main>

      {/* Add Course Modal */}
      {showAddCourseModal && (
        <div style={{
          position: 'fixed',
          top: 0, left: 0, right: 0, bottom: 0,
          background: 'rgba(0, 0, 0, 0.65)',
          backdropFilter: 'blur(8px)',
          zIndex: 1000,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '1rem'
        }} onClick={() => setShowAddCourseModal(false)}>
          <div style={{
            background: '#fff',
            borderRadius: '12px',
            maxWidth: '500px',
            width: '100%',
            maxHeight: '90vh',
            overflow: 'auto',
            boxShadow: '0 10px 25px rgba(0, 0, 0, 0.15)',
            border: '1px solid #e2e8f0'
          }} onClick={e => e.stopPropagation()}>
            <div style={{
              background: '#fff',
              color: '#1e293b',
              padding: '1.5rem 2rem',
              borderRadius: '12px 12px 0 0',
              borderBottom: '1px solid #e2e8f0',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}>
              <h3 style={{
                fontSize: '1.25rem',
                fontWeight: '600',
                margin: 0,
                color: '#1e293b'
              }}>➕ Add New Course</h3>
              <button 
                onClick={() => setShowAddCourseModal(false)}
                style={{
                  background: '#f8fafc',
                  border: '1px solid #e2e8f0',
                  width: '32px',
                  height: '32px',
                  borderRadius: '6px',
                  color: '#64748b',
                  fontSize: '1rem',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >✕</button>
            </div>
            
            <div style={{ padding: '1.5rem 2rem' }}>
              <div style={{ marginBottom: '1rem' }}>
                <label style={{
                  display: 'block',
                  marginBottom: '0.5rem',
                  fontWeight: '500',
                  color: '#374151'
                }}>Course Name</label>
                <input
                  type="text"
                  value={newCourse.name}
                  onChange={(e) => setNewCourse({...newCourse, name: e.target.value})}
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: '1px solid #d1d5db',
                    borderRadius: '6px',
                    fontSize: '0.875rem'
                  }}
                  placeholder="Enter course name"
                />
              </div>
              <div style={{ marginBottom: '1rem' }}>
                <label style={{
                  display: 'block',
                  marginBottom: '0.5rem',
                  fontWeight: '500',
                  color: '#374151'
                }}>Duration</label>
                <input
                  type="text"
                  value={newCourse.duration}
                  onChange={(e) => setNewCourse({...newCourse, duration: e.target.value})}
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: '1px solid #d1d5db',
                    borderRadius: '6px',
                    fontSize: '0.875rem'
                  }}
                  placeholder="e.g., 4 years"
                />
              </div>
              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{
                  display: 'block',
                  marginBottom: '0.5rem',
                  fontWeight: '500',
                  color: '#374151'
                }}>Intake</label>
                <input
                  type="text"
                  value={newCourse.intake}
                  onChange={(e) => setNewCourse({...newCourse, intake: e.target.value})}
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: '1px solid #d1d5db',
                    borderRadius: '6px',
                    fontSize: '0.875rem'
                  }}
                  placeholder="e.g., 150 students/year"
                />
              </div>
            </div>

            <div style={{
              padding: '1rem 2rem 1.5rem 2rem',
              borderTop: '1px solid #e2e8f0',
              display: 'flex',
              justifyContent: 'flex-end',
              gap: '0.75rem'
            }}>
              <button 
                onClick={() => setShowAddCourseModal(false)}
                style={{
                  background: '#f3f4f6',
                  color: '#374151',
                  border: '1px solid #d1d5db',
                  padding: '0.5rem 1rem',
                  borderRadius: '6px',
                  fontWeight: '500',
                  cursor: 'pointer',
                  fontSize: '0.875rem'
                }}
              >Cancel</button>
              <button 
                onClick={handleAddCourse}
                style={{
                  background: '#2563eb',
                  color: 'white',
                  border: 'none',
                  padding: '0.5rem 1rem',
                  borderRadius: '6px',
                  fontWeight: '500',
                  cursor: 'pointer',
                  fontSize: '0.875rem'
                }}
              >Add Course</button>
            </div>
>>>>>>> c58690afdcbaf86d63e4e395000c9e3f86743a8d
          </div>
        </div>
      )}

<<<<<<< HEAD
      {/* Subject Modal */}
      {showSubjectModal && (
        <div className="modal-overlay" onClick={() => setShowSubjectModal(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <h3>{editingSubject ? 'Edit Subject' : 'Add New Subject'}</h3>
            <form onSubmit={e => { 
              e.preventDefault(); 
              editingSubject ? handleUpdateSubject() : handleAddSubject(); 
            }}>
              <input
                type="text"
                placeholder="Subject Name *"
                value={subjectForm.name}
                onChange={e => setSubjectForm({ ...subjectForm, name: e.target.value })}
                required
              />
              <input
                type="text"
                placeholder="Subject Code (e.g., CS101) *"
                value={subjectForm.code}
                onChange={e => setSubjectForm({ ...subjectForm, code: e.target.value })}
                required
              />
              <input
                type="number"
                placeholder="Credits *"
                value={subjectForm.credits}
                onChange={e => setSubjectForm({ ...subjectForm, credits: e.target.value })}
                required
                min="1"
                max="10"
              />
              <textarea
                placeholder="Syllabus Overview *"
                value={subjectForm.syllabus}
                onChange={e => setSubjectForm({ ...subjectForm, syllabus: e.target.value })}
                required
                rows="4"
              />
              <div className="modal-actions">
                <button type="button" onClick={() => setShowSubjectModal(false)}>Cancel</button>
                <button type="submit" className="btn-primary">
                  {editingSubject ? 'Update Subject' : 'Add Subject'}
                </button>
              </div>
            </form>
=======
      {/* Edit Course Modal */}
      {showEditCourseModal && (
        <div style={{
          position: 'fixed',
          top: 0, left: 0, right: 0, bottom: 0,
          background: 'rgba(0, 0, 0, 0.65)',
          backdropFilter: 'blur(8px)',
          zIndex: 1000,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '1rem'
        }} onClick={() => setShowEditCourseModal(false)}>
          <div style={{
            background: '#fff',
            borderRadius: '12px',
            maxWidth: '500px',
            width: '100%',
            maxHeight: '90vh',
            overflow: 'auto',
            boxShadow: '0 10px 25px rgba(0, 0, 0, 0.15)',
            border: '1px solid #e2e8f0'
          }} onClick={e => e.stopPropagation()}>
            <div style={{
              background: '#fff',
              color: '#1e293b',
              padding: '1.5rem 2rem',
              borderRadius: '12px 12px 0 0',
              borderBottom: '1px solid #e2e8f0',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}>
              <h3 style={{
                fontSize: '1.25rem',
                fontWeight: '600',
                margin: 0,
                color: '#1e293b'
              }}>✏️ Edit Course</h3>
              <button 
                onClick={() => setShowEditCourseModal(false)}
                style={{
                  background: '#f8fafc',
                  border: '1px solid #e2e8f0',
                  width: '32px',
                  height: '32px',
                  borderRadius: '6px',
                  color: '#64748b',
                  fontSize: '1rem',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >✕</button>
            </div>
            
            <div style={{ padding: '1.5rem 2rem' }}>
              <div style={{ marginBottom: '1rem' }}>
                <label style={{
                  display: 'block',
                  marginBottom: '0.5rem',
                  fontWeight: '500',
                  color: '#374151'
                }}>Course Name</label>
                <input
                  type="text"
                  value={newCourse.name}
                  onChange={(e) => setNewCourse({...newCourse, name: e.target.value})}
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: '1px solid #d1d5db',
                    borderRadius: '6px',
                    fontSize: '0.875rem'
                  }}
                  placeholder="Enter course name"
                />
              </div>
              <div style={{ marginBottom: '1rem' }}>
                <label style={{
                  display: 'block',
                  marginBottom: '0.5rem',
                  fontWeight: '500',
                  color: '#374151'
                }}>Duration</label>
                <input
                  type="text"
                  value={newCourse.duration}
                  onChange={(e) => setNewCourse({...newCourse, duration: e.target.value})}
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: '1px solid #d1d5db',
                    borderRadius: '6px',
                    fontSize: '0.875rem'
                  }}
                  placeholder="e.g., 4 years"
                />
              </div>
              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{
                  display: 'block',
                  marginBottom: '0.5rem',
                  fontWeight: '500',
                  color: '#374151'
                }}>Intake</label>
                <input
                  type="text"
                  value={newCourse.intake}
                  onChange={(e) => setNewCourse({...newCourse, intake: e.target.value})}
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: '1px solid #d1d5db',
                    borderRadius: '6px',
                    fontSize: '0.875rem'
                  }}
                  placeholder="e.g., 150 students/year"
                />
              </div>
            </div>

            <div style={{
              padding: '1rem 2rem 1.5rem 2rem',
              borderTop: '1px solid #e2e8f0',
              display: 'flex',
              justifyContent: 'flex-end',
              gap: '0.75rem'
            }}>
              <button 
                onClick={() => setShowEditCourseModal(false)}
                style={{
                  background: '#f3f4f6',
                  color: '#374151',
                  border: '1px solid #d1d5db',
                  padding: '0.5rem 1rem',
                  borderRadius: '6px',
                  fontWeight: '500',
                  cursor: 'pointer',
                  fontSize: '0.875rem'
                }}
              >Cancel</button>
              <button 
                onClick={handleEditCourse}
                style={{
                  background: '#2563eb',
                  color: 'white',
                  border: 'none',
                  padding: '0.5rem 1rem',
                  borderRadius: '6px',
                  fontWeight: '500',
                  cursor: 'pointer',
                  fontSize: '0.875rem'
                }}
              >Update Course</button>
            </div>
>>>>>>> c58690afdcbaf86d63e4e395000c9e3f86743a8d
          </div>
        </div>
      )}

<<<<<<< HEAD
      {/* Syllabus Modal */}
      {showSyllabusModal && selectedSubject && (
        <div className="modal-overlay" onClick={() => setShowSyllabusModal(false)}>
          <div className="modal-content large" onClick={e => e.stopPropagation()}>
            <h3>Edit Syllabus - {selectedSubject.name}</h3>
            <textarea
              className="syllabus-editor"
              value={tempSyllabus}
              onChange={e => setTempSyllabus(e.target.value)}
              placeholder="Enter detailed syllabus including course objectives, learning outcomes, topics covered, assessment methods, and recommended textbooks..."
              rows="12"
            />
            <div className="modal-actions">
              <button onClick={() => setShowSyllabusModal(false)}>Cancel</button>
              <button className="btn-primary" onClick={handleSaveSyllabus}>
                Save Syllabus
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Content Upload Modal */}
      {showContentModal && (
        <div className="modal-overlay" onClick={() => setShowContentModal(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <h3>Upload Academic Content</h3>
            <form onSubmit={e => { e.preventDefault(); handleUploadContent(); }}>
              <input
                type="text"
                placeholder="File name (e.g., Lecture Notes Chapter 1.pdf) *"
                value={contentFile}
                onChange={e => setContentFile(e.target.value)}
                required
              />
              <div className="upload-area">
                <p>📁 Drag and drop files here or click to browse</p>
                <p className="upload-note">Supported formats: PDF, DOC, PPT, ZIP, Video files</p>
                <input type="file" style={{ display: 'none' }} />
              </div>
              <div className="modal-actions">
                <button type="button" onClick={() => setShowContentModal(false)}>Cancel</button>
                <button type="submit" className="btn-primary">Upload Content</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* File View Modal */}
      {showViewModal && (
        <div className="modal-overlay" onClick={() => setShowViewModal(false)}>
          <div className="modal-content large" onClick={e => e.stopPropagation()}>
            <h3>📄 Viewing: {viewingFile}</h3>
            <div className="file-preview">
              <div className="preview-placeholder">
                <p>📄 File Preview</p>
                <p>Filename: {viewingFile}</p>
                <p>In a real application, this would show the actual file content or a preview.</p>
                <p>For PDFs, images, and documents, you would integrate viewers here.</p>
              </div>
            </div>
            <div className="modal-actions">
              <button onClick={() => setShowViewModal(false)}>Close</button>
              <button className="btn-primary" onClick={() => handleDownloadFile(viewingFile)}>
                ⬇️ Download
              </button>
=======
      {/* Add Subject Modal */}
      {showAddSubjectModal && (
        <div style={{
          position: 'fixed',
          top: 0, left: 0, right: 0, bottom: 0,
          background: 'rgba(0, 0, 0, 0.65)',
          backdropFilter: 'blur(8px)',
          zIndex: 1000,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '1rem'
        }} onClick={() => setShowAddSubjectModal(false)}>
          <div style={{
            background: '#fff',
            borderRadius: '12px',
            maxWidth: '500px',
            width: '100%',
            maxHeight: '90vh',
            overflow: 'auto',
            boxShadow: '0 10px 25px rgba(0, 0, 0, 0.15)',
            border: '1px solid #e2e8f0'
          }} onClick={e => e.stopPropagation()}>
            <div style={{
              background: '#fff',
              color: '#1e293b',
              padding: '1.5rem 2rem',
              borderRadius: '12px 12px 0 0',
              borderBottom: '1px solid #e2e8f0',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}>
              <h3 style={{
                fontSize: '1.25rem',
                fontWeight: '600',
                margin: 0,
                color: '#1e293b'
              }}>➕ Add New Subject</h3>
              <button 
                onClick={() => setShowAddSubjectModal(false)}
                style={{
                  background: '#f8fafc',
                  border: '1px solid #e2e8f0',
                  width: '32px',
                  height: '32px',
                  borderRadius: '6px',
                  color: '#64748b',
                  fontSize: '1rem',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >✕</button>
            </div>
            
            <div style={{ padding: '1.5rem 2rem' }}>
              <div style={{ marginBottom: '1rem' }}>
                <label style={{
                  display: 'block',
                  marginBottom: '0.5rem',
                  fontWeight: '500',
                  color: '#374151'
                }}>Subject Name</label>
                <input
                  type="text"
                  value={newSubject.name}
                  onChange={(e) => setNewSubject({...newSubject, name: e.target.value})}
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: '1px solid #d1d5db',
                    borderRadius: '6px',
                    fontSize: '0.875rem'
                  }}
                  placeholder="Enter subject name"
                />
              </div>
              <div style={{ marginBottom: '1rem' }}>
                <label style={{
                  display: 'block',
                  marginBottom: '0.5rem',
                  fontWeight: '500',
                  color: '#374151'
                }}>Subject Code</label>
                <input
                  type="text"
                  value={newSubject.code}
                  onChange={(e) => setNewSubject({...newSubject, code: e.target.value})}
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: '1px solid #d1d5db',
                    borderRadius: '6px',
                    fontSize: '0.875rem'
                  }}
                  placeholder="e.g., CS201"
                />
              </div>
              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{
                  display: 'block',
                  marginBottom: '0.5rem',
                  fontWeight: '500',
                  color: '#374151'
                }}>Credits</label>
                <input
                  type="number"
                  value={newSubject.credits}
                  onChange={(e) => setNewSubject({...newSubject, credits: e.target.value})}
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: '1px solid #d1d5db',
                    borderRadius: '6px',
                    fontSize: '0.875rem'
                  }}
                  placeholder="e.g., 3"
                />
              </div>
            </div>

            <div style={{
              padding: '1rem 2rem 1.5rem 2rem',
              borderTop: '1px solid #e2e8f0',
              display: 'flex',
              justifyContent: 'flex-end',
              gap: '0.75rem'
            }}>
              <button 
                onClick={() => setShowAddSubjectModal(false)}
                style={{
                  background: '#f3f4f6',
                  color: '#374151',
                  border: '1px solid #d1d5db',
                  padding: '0.5rem 1rem',
                  borderRadius: '6px',
                  fontWeight: '500',
                  cursor: 'pointer',
                  fontSize: '0.875rem'
                }}
              >Cancel</button>
              <button 
                onClick={handleAddSubject}
                style={{
                  background: '#2563eb',
                  color: 'white',
                  border: 'none',
                  padding: '0.5rem 1rem',
                  borderRadius: '6px',
                  fontWeight: '500',
                  cursor: 'pointer',
                  fontSize: '0.875rem'
                }}
              >Add Subject</button>
            </div>
          </div>
        </div>
      )}

      {/* Edit Subject Modal */}
      {showEditSubjectModal && (
        <div style={{
          position: 'fixed',
          top: 0, left: 0, right: 0, bottom: 0,
          background: 'rgba(0, 0, 0, 0.65)',
          backdropFilter: 'blur(8px)',
          zIndex: 1000,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '1rem'
        }} onClick={() => setShowEditSubjectModal(false)}>
          <div style={{
            background: '#fff',
            borderRadius: '12px',
            maxWidth: '500px',
            width: '100%',
            maxHeight: '90vh',
            overflow: 'auto',
            boxShadow: '0 10px 25px rgba(0, 0, 0, 0.15)',
            border: '1px solid #e2e8f0'
          }} onClick={e => e.stopPropagation()}>
            <div style={{
              background: '#fff',
              color: '#1e293b',
              padding: '1.5rem 2rem',
              borderRadius: '12px 12px 0 0',
              borderBottom: '1px solid #e2e8f0',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}>
              <h3 style={{
                fontSize: '1.25rem',
                fontWeight: '600',
                margin: 0,
                color: '#1e293b'
              }}>✏️ Edit Subject</h3>
              <button 
                onClick={() => setShowEditSubjectModal(false)}
                style={{
                  background: '#f8fafc',
                  border: '1px solid #e2e8f0',
                  width: '32px',
                  height: '32px',
                  borderRadius: '6px',
                  color: '#64748b',
                  fontSize: '1rem',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >✕</button>
            </div>
            
            <div style={{ padding: '1.5rem 2rem' }}>
              <div style={{ marginBottom: '1rem' }}>
                <label style={{
                  display: 'block',
                  marginBottom: '0.5rem',
                  fontWeight: '500',
                  color: '#374151'
                }}>Subject Name</label>
                <input
                  type="text"
                  value={newSubject.name}
                  onChange={(e) => setNewSubject({...newSubject, name: e.target.value})}
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: '1px solid #d1d5db',
                    borderRadius: '6px',
                    fontSize: '0.875rem'
                  }}
                  placeholder="Enter subject name"
                />
              </div>
              <div style={{ marginBottom: '1rem' }}>
                <label style={{
                  display: 'block',
                  marginBottom: '0.5rem',
                  fontWeight: '500',
                  color: '#374151'
                }}>Subject Code</label>
                <input
                  type="text"
                  value={newSubject.code}
                  onChange={(e) => setNewSubject({...newSubject, code: e.target.value})}
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: '1px solid #d1d5db',
                    borderRadius: '6px',
                    fontSize: '0.875rem'
                  }}
                  placeholder="e.g., CS201"
                />
              </div>
              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{
                  display: 'block',
                  marginBottom: '0.5rem',
                  fontWeight: '500',
                  color: '#374151'
                }}>Credits</label>
                <input
                  type="number"
                  value={newSubject.credits}
                  onChange={(e) => setNewSubject({...newSubject, credits: e.target.value})}
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: '1px solid #d1d5db',
                    borderRadius: '6px',
                    fontSize: '0.875rem'
                  }}
                  placeholder="e.g., 3"
                />
              </div>
            </div>

            <div style={{
              padding: '1rem 2rem 1.5rem 2rem',
              borderTop: '1px solid #e2e8f0',
              display: 'flex',
              justifyContent: 'flex-end',
              gap: '0.75rem'
            }}>
              <button 
                onClick={() => setShowEditSubjectModal(false)}
                style={{
                  background: '#f3f4f6',
                  color: '#374151',
                  border: '1px solid #d1d5db',
                  padding: '0.5rem 1rem',
                  borderRadius: '6px',
                  fontWeight: '500',
                  cursor: 'pointer',
                  fontSize: '0.875rem'
                }}
              >Cancel</button>
              <button 
                onClick={handleEditSubject}
                style={{
                  background: '#2563eb',
                  color: 'white',
                  border: 'none',
                  padding: '0.5rem 1rem',
                  borderRadius: '6px',
                  fontWeight: '500',
                  cursor: 'pointer',
                  fontSize: '0.875rem'
                }}
              >Update Subject</button>
            </div>
          </div>
        </div>
      )}

      {/* Add File Modal */}
      {showAddFileModal && (
        <div style={{
          position: 'fixed',
          top: 0, left: 0, right: 0, bottom: 0,
          background: 'rgba(0, 0, 0, 0.65)',
          backdropFilter: 'blur(8px)',
          zIndex: 1000,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '1rem'
        }} onClick={() => setShowAddFileModal(false)}>
          <div style={{
            background: '#fff',
            borderRadius: '12px',
            maxWidth: '500px',
            width: '100%',
            maxHeight: '90vh',
            overflow: 'auto',
            boxShadow: '0 10px 25px rgba(0, 0, 0, 0.15)',
            border: '1px solid #e2e8f0'
          }} onClick={e => e.stopPropagation()}>
            <div style={{
              background: '#fff',
              color: '#1e293b',
              padding: '1.5rem 2rem',
              borderRadius: '12px 12px 0 0',
              borderBottom: '1px solid #e2e8f0',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}>
              <h3 style={{
                fontSize: '1.25rem',
                fontWeight: '600',
                margin: 0,
                color: '#1e293b'
              }}>➕ Add Content File</h3>
              <button 
                onClick={() => setShowAddFileModal(false)}
                style={{
                  background: '#f8fafc',
                  border: '1px solid #e2e8f0',
                  width: '32px',
                  height: '32px',
                  borderRadius: '6px',
                  color: '#64748b',
                  fontSize: '1rem',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >✕</button>
            </div>
            
            <div style={{ padding: '1.5rem 2rem' }}>
              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{
                  display: 'block',
                  marginBottom: '0.5rem',
                  fontWeight: '500',
                  color: '#374151'
                }}>Upload File</label>
                
                {/* Drag & Drop Area */}
                <div
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                  style={{
                    border: `2px dashed ${isDragOver ? '#2563eb' : '#d1d5db'}`,
                    borderRadius: '8px',
                    padding: '2rem',
                    textAlign: 'center',
                    background: isDragOver ? '#eff6ff' : '#f9fafb',
                    transition: 'all 0.2s',
                    marginBottom: '1rem',
                    cursor: 'pointer'
                  }}
                  onClick={() => document.getElementById('fileInput').click()}
                >
                  <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}>
                    <div style={{
                      fontSize: '2rem',
                      color: '#6b7280'
                    }}>📁</div>
                    <div style={{
                      color: '#374151',
                      fontWeight: '500',
                      fontSize: '0.875rem'
                    }}>
                      {selectedFile ? selectedFile.name : 'Drop files here or click to browse'}
                    </div>
                    <div style={{
                      color: '#6b7280',
                      fontSize: '0.75rem'
                    }}>
                      Supports PDF, DOC, DOCX, PPT, PPTX files
                    </div>
                  </div>
                </div>

                {/* Hidden File Input */}
                <input
                  id="fileInput"
                  type="file"
                  accept=".pdf,.doc,.docx,.ppt,.pptx"
                  onChange={(e) => {
                    if (e.target.files.length > 0) {
                      handleFileSelect(e.target.files[0]);
                    }
                  }}
                  style={{ display: 'none' }}
                />

                {/* Manual File Name Input (Alternative) */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  marginBottom: '0.5rem'
                }}>
                  <div style={{
                    flex: 1,
                    height: '1px',
                    background: '#e5e7eb'
                  }}></div>
                  <span style={{
                    color: '#6b7280',
                    fontSize: '0.75rem',
                    fontWeight: '500'
                  }}>OR</span>
                  <div style={{
                    flex: 1,
                    height: '1px',
                    background: '#e5e7eb'
                  }}></div>
                </div>

                <label style={{
                  display: 'block',
                  marginBottom: '0.5rem',
                  fontWeight: '500',
                  color: '#374151',
                  fontSize: '0.875rem'
                }}>Enter File Name Manually</label>
                <input
                  type="text"
                  value={newFileName}
                  onChange={(e) => {
                    setNewFileName(e.target.value);
                    setSelectedFile(null); // Clear selected file if typing manually
                  }}
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: '1px solid #d1d5db',
                    borderRadius: '6px',
                    fontSize: '0.875rem'
                  }}
                  placeholder="e.g., Lecture Notes.pdf"
                />
              </div>
            </div>

            <div style={{
              padding: '1rem 2rem 1.5rem 2rem',
              borderTop: '1px solid #e2e8f0',
              display: 'flex',
              justifyContent: 'flex-end',
              gap: '0.75rem'
            }}>
              <button 
                onClick={() => setShowAddFileModal(false)}
                style={{
                  background: '#f3f4f6',
                  color: '#374151',
                  border: '1px solid #d1d5db',
                  padding: '0.5rem 1rem',
                  borderRadius: '6px',
                  fontWeight: '500',
                  cursor: 'pointer',
                  fontSize: '0.875rem'
                }}
              >Cancel</button>
              <button 
                onClick={handleAddFile}
                style={{
                  background: '#2563eb',
                  color: 'white',
                  border: 'none',
                  padding: '0.5rem 1rem',
                  borderRadius: '6px',
                  fontWeight: '500',
                  cursor: 'pointer',
                  fontSize: '0.875rem'
                }}
              >Add File</button>
            </div>
          </div>
        </div>
      )}

      {/* Editable Syllabus Modal */}
      {showSyllabusModal && selectedSubject && (
        <div style={{
          position: 'fixed',
          top: 0, left: 0, right: 0, bottom: 0,
          background: 'rgba(0, 0, 0, 0.65)',
          backdropFilter: 'blur(8px)',
          zIndex: 1000,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '1rem'
        }} onClick={() => setShowSyllabusModal(false)}>
          <div style={{
            background: '#fff',
            borderRadius: '12px',
            maxWidth: '800px',
            width: '100%',
            maxHeight: '90vh',
            overflow: 'auto',
            boxShadow: '0 10px 25px rgba(0, 0, 0, 0.15)',
            border: '1px solid #e2e8f0'
          }} onClick={e => e.stopPropagation()}>
            <div style={{
              background: '#fff',
              color: '#1e293b',
              padding: '1.5rem 2rem',
              borderRadius: '12px 12px 0 0',
              borderBottom: '1px solid #e2e8f0',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}>
              <div>
                <h3 style={{
                  fontSize: '1.25rem',
                  fontWeight: '600',
                  margin: 0,
                  color: '#1e293b'
                }}>📝 Edit Syllabus - {selectedSubject.name}</h3>
                <div style={{
                  fontSize: '0.875rem',
                  color: '#64748b',
                  marginTop: '0.25rem'
                }}>Course Code: {selectedSubject.code} | Credits: {selectedSubject.credits}</div>
              </div>
              <button 
                onClick={() => setShowSyllabusModal(false)}
                style={{
                  background: '#f8fafc',
                  border: '1px solid #e2e8f0',
                  width: '32px',
                  height: '32px',
                  borderRadius: '6px',
                  color: '#64748b',
                  fontSize: '1rem',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >✕</button>
            </div>

            <div style={{
              padding: '1.5rem 2rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem'
            }}>
              <div>
                <h4 style={{
                  fontSize: '1rem',
                  fontWeight: '600',
                  color: '#1e293b',
                  marginBottom: '0.75rem'
                }}>🎯 Learning Objectives</h4>
                <textarea
                  value={editingSyllabus.objectives?.join('\n') || ''}
                  onChange={(e) => setEditingSyllabus({
                    ...editingSyllabus, 
                    objectives: e.target.value.split('\n').filter(obj => obj.trim() !== '')
                  })}
                  style={{
                    width: '100%',
                    minHeight: '120px',
                    padding: '0.75rem',
                    border: '1px solid #d1d5db',
                    borderRadius: '6px',
                    fontSize: '0.875rem',
                    resize: 'vertical'
                  }}
                  placeholder="Enter learning objectives (one per line)..."
                />
              </div>

              <div>
                <h4 style={{
                  fontSize: '1rem',
                  fontWeight: '600',
                  color: '#1e293b',
                  marginBottom: '0.75rem'
                }}>📊 Assessment Methods</h4>
                <textarea
                  value={editingSyllabus.assessment?.join('\n') || ''}
                  onChange={(e) => setEditingSyllabus({
                    ...editingSyllabus, 
                    assessment: e.target.value.split('\n').filter(method => method.trim() !== '')
                  })}
                  style={{
                    width: '100%',
                    minHeight: '100px',
                    padding: '0.75rem',
                    border: '1px solid #d1d5db',
                    borderRadius: '6px',
                    fontSize: '0.875rem',
                    resize: 'vertical'
                  }}
                  placeholder="Enter assessment methods (one per line)..."
                />
              </div>

              <div>
                <h4 style={{
                  fontSize: '1rem',
                  fontWeight: '600',
                  color: '#1e293b',
                  marginBottom: '0.75rem'
                }}>📚 Recommended References</h4>
                <textarea
                  value={editingSyllabus.references?.join('\n') || ''}
                  onChange={(e) => setEditingSyllabus({
                    ...editingSyllabus, 
                    references: e.target.value.split('\n').filter(ref => ref.trim() !== '')
                  })}
                  style={{
                    width: '100%',
                    minHeight: '120px',
                    padding: '0.75rem',
                    border: '1px solid #d1d5db',
                    borderRadius: '6px',
                    fontSize: '0.875rem',
                    resize: 'vertical'
                  }}
                  placeholder="Enter references (one per line)..."
                />
              </div>
            </div>

            <div style={{
              padding: '1rem 2rem 1.5rem 2rem',
              borderTop: '1px solid #e2e8f0',
              display: 'flex',
              justifyContent: 'flex-end',
              gap: '0.75rem'
            }}>
              <button 
                onClick={() => setShowSyllabusModal(false)}
                style={{
                  background: '#f3f4f6',
                  color: '#374151',
                  border: '1px solid #d1d5db',
                  padding: '0.5rem 1rem',
                  borderRadius: '6px',
                  fontWeight: '500',
                  cursor: 'pointer',
                  fontSize: '0.875rem'
                }}
              >Cancel</button>
              <button 
                onClick={handleSaveSyllabus}
                style={{
                  background: '#2563eb',
                  color: 'white',
                  border: 'none',
                  padding: '0.5rem 1rem',
                  borderRadius: '6px',
                  fontWeight: '500',
                  cursor: 'pointer',
                  fontSize: '0.875rem'
                }}
              >Save Changes</button>
>>>>>>> c58690afdcbaf86d63e4e395000c9e3f86743a8d
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AcademicContent;