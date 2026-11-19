let employees = [
    { name: "Ali", department: "IT", daysPresent: 22, totalDays: 26 },
    { name: "Sara", department: "HR", daysPresent: 24, totalDays: 26 },
    { name: "Ahmed", department: "IT", daysPresent: 18, totalDays: 26 },
    { name: "Zara", department: "Frontend", daysPresent: 25, totalDays: 26 },
    { name: "Hina", department: "HR", daysPresent: 20, totalDays: 26 }
];

function generateAttendanceReport(employees) {

    // Calculate attendance percentage
    let attendanceData = employees.map((employee) => {
        let percentage =
            (employee.daysPresent / employee.totalDays) * 100;

        return {
            ...employee,
            attendance: Number(percentage.toFixed(2))
        };
    });

    // Attendance 80% or higher
    let goodAttendance = attendanceData
        .filter((employee) => employee.attendance >= 80)
        .map((employee) => employee.name);

    // Attendance below 80%
    let lowAttendance = attendanceData
        .filter((employee) => employee.attendance < 80)
        .map((employee) => employee.name);

    // Find highest attendance
    let highestEmployee = attendanceData.reduce((highest, employee) => {
        if (employee.attendance > highest.attendance) {
            return employee;
        }

        return highest;
    });

    // Calculate average attendance
    let totalAttendance = attendanceData.reduce((total, employee) => {
        return total + employee.attendance;
    }, 0);

    let averageAttendance =
        totalAttendance / attendanceData.length;

    // Final report
    return {
        totalEmployees: attendanceData.length,
        averageAttendance: Number(averageAttendance.toFixed(2)),
        highestAttendance: highestEmployee.name,
        goodAttendance: goodAttendance,
        lowAttendance: lowAttendance
    };
}

let report = generateAttendanceReport(employees);

console.log(report);