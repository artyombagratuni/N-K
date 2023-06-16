export interface IEmployees {
  name: string;
  surname: string;
  email: string;
  position: string;
  id: string;
}

export interface ITasks {
  name: string;
  description: string;
  startDate: string;
  endDate: string;
  employeeId: string;
  id: number;
}

export interface IFormData {
  name: string;
  surname: string;
  email: string;
  position: string;
}

export interface IEmployeesProps {
  loading: boolean;
  setLoading: (load: boolean) => void;
}

export interface ITasksProps {
  loading: boolean;
  setLoading: (load: boolean) => void;
}
